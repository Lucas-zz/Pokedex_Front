import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache()
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
         </ApolloProvider>
    </React.StrictMode>
);