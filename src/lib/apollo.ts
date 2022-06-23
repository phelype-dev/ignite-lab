import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //URL do Graphql
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o8238g15e301xm8itxewp1/master",
  cache: new InMemoryCache(), // Cache das requisições
});
