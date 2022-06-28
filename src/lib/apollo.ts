import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //URL do Graphql
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN} `,
  },
  //cache: new InMemoryCache() as any, // Cache das requisições
  cache: new InMemoryCache() as ApolloCache<NormalizedCacheObject>
});
