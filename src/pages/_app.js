import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from '../lib/apollo-client'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <ApolloProvider client={createApolloClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
    </>

  )
}
