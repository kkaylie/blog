import { HttpLink } from '@apollo/client'
import {
  registerApolloClient,
  InMemoryCache,
  ApolloClient,
} from '@apollo/client-integration-nextjs'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    }),
  })
})
