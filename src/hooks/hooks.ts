import { useEffect } from 'react'

type ColorName =
  | 'ui-pink'
  | 'ui-yellow'
  | 'ui-green'
  | 'ui-blue'
  | 'ui-violet'
  | 'bg-main'
  | 'text-color'
  | 'text-dark-color'

export const useDarkTheme = (darkMode?: boolean) => {
  useEffect(() => {
    setCssVariable('ui-pink', darkMode ? '#753751' : '#FF77B0')
    setCssVariable('ui-yellow', darkMode ? '#A37E0F' : '#FFEE59')
    setCssVariable('ui-green', darkMode ? '#2C5E25' : '#6AE057')
    setCssVariable('ui-blue', darkMode ? '#1F445E' : '#54B7FF')
    setCssVariable('ui-violet', darkMode ? '#4B2A5E' : '#CC74FF')
    setCssVariable('bg-main', darkMode ? '#464646' : '#FFFFFF')
    setCssVariable('text-color', darkMode ? '#CECECE' : '#FFFFFF')
    setCssVariable('text-dark-color', darkMode ? '#CECECE' : '#464646')
  }, [darkMode])
}

export const setCssVariable = (name: ColorName, value?: string): void => {
  if (value && typeof window !== 'undefined') {
    window.document.documentElement.style.setProperty(`--${name}`, value)
  }
}
