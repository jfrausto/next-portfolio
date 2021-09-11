import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
// import 'simplebar/dist/simplebar.min.css';
// import "simplebar/src/simplebar.css";
import 'simplebar/dist/simplebar.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </ChakraProvider>
  )
}

export default MyApp
