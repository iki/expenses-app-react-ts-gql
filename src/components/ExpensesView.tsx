import React, { memo } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

import Transactions from './Transactions'

const getUser = loader('../graphql/queries/getUser.gql')
const { REACT_APP_DEMO_USER_ID: demoUserId } = process.env

export default memo(props => {
  const { loading, data } = useQuery(getUser, { variables: { id: demoUserId } })
  const { User: user } = data
  const transactions = (user && user.transactions) || []
  console.debug('get user', demoUserId, loading, user, transactions)
  return <Transactions transactions={transactions} onRemove={() => {}} />
})
