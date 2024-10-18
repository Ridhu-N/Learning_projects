import RegisterForm from './components/home';
import UserTable from './components/table';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onError } from "@apollo/client/link/error";
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache, from } from '@apollo/client'

const errorLink = onError(({ graphqlErrors, networkErrors })=>{
  if(graphqlErrors){
    graphqlErrors.map(({ message, location, path })=>{
      console.log(`graphQL Error ${message}`);
      return "";
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/graphql'}),
])

const Client = new ApolloClient({
  cache :  new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={Client}>
      <RegisterForm/>
      <hr></hr>
      <hr></hr>
      <UserTable/>
      </ApolloProvider>
    </div>
  );
}

export default App;
