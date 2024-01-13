import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});




ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ApolloProvider>
)
