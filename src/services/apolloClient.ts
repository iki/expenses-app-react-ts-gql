import ApolloClient from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { getMainDefinition } from 'apollo-utilities'

import { apiUrl, wsUrl } from '../config/api'
import { getToken } from './auth'

declare interface IApolloError {
  message?: string
  graphQLErrors?: IApolloGraphQLError[]
  networkError?: IApolloNetworkError
  operation?: IApolloOperation
}

declare interface IApolloGraphQLError {
  locations: Array<{
    column: number
    line: number
  }>
  message: string
}

declare interface IApolloNetworkError {
  message: string
  statusCode: number
  result: {
    errors: IApolloGraphQLError[]
  }
  response: IAnyObject
}

declare interface IApolloOperation {
  operationName: string
  variables: IAnyObject
  query: any
  extensions: any
}

// FIXME(upstream): Use ErrorResponse type when fixed: https://github.com/apollographql/apollo-link/issues/536.
export const getErrorMessage = ({ graphQLErrors, networkError, operation }: IApolloError) =>
  `API Error${
    networkError
      ? `: ${networkError.statusCode ? `[${networkError.statusCode}] ` : ''}${networkError.message.replace(/\.$/, '')}${
          networkError.result ? `: ${JSON.stringify(networkError.result)}` : ''
        }`
      : ''
  }${graphQLErrors && graphQLErrors.length ? `: ${graphQLErrors.map(({ message }) => message).join(': ')}` : ''}${
    operation ? ` @ ${operation.operationName}` : ''
  }${operation && operation.variables ? `(${JSON.stringify(operation.variables)})` : ''}`

// Create transport link
const httpLink = createHttpLink({ uri: apiUrl })
let transportLink = httpLink

// Add optional websocket link split for subscriptions
if (wsUrl) {
  const wsLink = new WebSocketLink({
    uri: wsUrl,
    options: {
      reconnect: true,
    },
  })

  transportLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    httpLink,
  )
}

// Create authorization link
const authLink = setContext((_, { headers }) => {
  const token = getToken()
  return token
    ? {
        headers: {
          ...headers,
          authorization: `bearer ${token}`,
        },
      }
    : {}
})

// Combine authorization and transport links
let link = authLink.concat(transportLink)

// Add optional logging
if (!process.env.TEST_API_RUNNING) {
  const logLink = onError(error => console.error(getErrorMessage(error as any), error))

  link = logLink.concat(link)
}

// Setup client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export default client
