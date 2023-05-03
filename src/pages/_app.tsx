import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react';

const poppins = Poppins({
  weight: ['400', '700', '600'],
  subsets: ['latin']
})
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.getElementById('server-side-styles')
    if (style && style.parentNode) {
      style.parentNode.removeChild(style)
    }
  }, [])
  return <main className={poppins
    .className
  }><Component {...pageProps} /></main>
}
