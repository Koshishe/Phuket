import React, { useState } from 'react'
import styles from './ThemeToggler.module.scss'
import cn from 'classnames'

type Props = {
  onClick: (value: boolean) => void
  darkMode: boolean
}

export const ThemeToggler = ({ onClick, darkMode }: Props) => {
  const [isDarkMode, setDarkMode] = useState(darkMode)
  const handleClick = () => {
    setDarkMode(!isDarkMode)
    onClick(!isDarkMode)
  }

  return (
    <>
      <input type="checkbox" id="toggler" className={styles.checkbox} />
      <label
        className={cn(styles.label, { [styles.dark]: isDarkMode })}
        htmlFor="toggler"
        title={`Включить ${isDarkMode ? 'светлую' : 'темную'} тему`}
        onClick={handleClick}
      />
    </>
  )
}
