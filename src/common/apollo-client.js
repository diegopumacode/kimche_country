import {
  ApolloClient, InMemoryCache, HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';

const link = new HttpLink({ uri: 'https://countries.trevorblades.com/', fetch });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
