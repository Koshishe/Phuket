import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/main.scss'
import { store } from '@/state'
import { Provider } from 'react-redux'
import smoothScroll from 'smoothscroll-polyfill'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    smoothScroll.polyfill()
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
