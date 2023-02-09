import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const SFFont = localFont({
  src: [
    {
      path: './SFProText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SFProText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SFProText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${SFFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
