// Global definitions for development

// Generic object
declare interface IAnyObject {
  [key: string]: any
}

// Generic lodash predicates
type ILodashFunctionalPredicate = (value) => boolean
type ILodashPredicate = IAnyObject | [string, any] | ILodashFunctionalPredicate

// Style loader definitions
declare module '*.css' {
  const styles: any
  export = styles
}

// GraphQL loader definitions
declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export = value
}
