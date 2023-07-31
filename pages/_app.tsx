import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { MyContextProvider } from '../pages/context/MyContext';
// import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />

}
