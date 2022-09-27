import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/main.scss'
import { store } from '@/state'
import { Provider } from 'react-redux'
import smoothScroll from 'smoothscroll-polyfill'
import { useDarkTheme } from '@/hooks/hooks'

export const ThemeContext = React.createContext({
  darkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  setDarkMode: (value: boolean) => {},
})

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    smoothScroll.polyfill()
  }, [])

  useDarkTheme(darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeContext.Provider>
  )
}

export default MyApp
