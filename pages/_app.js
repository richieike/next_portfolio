import '../styles/globals.css';
import Layout from '../components/Layout';
import NextNProgress  from './NextNProgress';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {

 
  return (
        <Layout>
          <QueryClientProvider client ={queryClient}>
          <NextNProgress options={{ trickleSpeed: 200 }} />
           <Component {...pageProps} />  
           </QueryClientProvider>
        </Layout>
        
    )
}

export default MyApp
