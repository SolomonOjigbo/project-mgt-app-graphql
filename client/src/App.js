import React from 'react';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
      <div className="container">
      
      <h1>Project Management App</h1>
    </div>
    </ApolloProvider>
    
    </>
  
  );
}

export default App;
