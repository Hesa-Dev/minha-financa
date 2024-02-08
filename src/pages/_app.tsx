import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
// react toastify | alertas  css global
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  
  // Provider
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={4000}/>
    </AuthProvider>
  )


}
