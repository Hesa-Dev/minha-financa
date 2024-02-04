import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  
  // Provider
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )


}
