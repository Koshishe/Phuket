import React, { useContext } from 'react'
import styles from './Plate.module.scss'
import { Menu } from '@/components/Menu/Menu'
import { CircleGreen } from '@/ui/svg/CircleGreen'
import { CircleViolet } from '@/ui/svg/CircleViolet'
import cn from 'classnames'
import { ThemeToggler } from '@/ui/ThemeToggler/ThemeToggler'
import { ThemeContext } from '$/_app'

export function Plate() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { setDarkMode, darkMode } = useContext(ThemeContext)

  return (
    <div className={cn(styles.wrapper, { [styles.darkMode]: darkMode })}>
      <div className={styles.content}>
        <div
          className={styles.image}
          style={{ backgroundImage: "url('./images/plate/main.png')" }}
        />
        <div>
          <h1 className={styles.title}>Пхукет</h1>
          <p className={styles.subtitle}>Таиланд</p>
          <ThemeToggler onClick={setDarkMode} darkMode={darkMode} />
        </div>
        <Menu />
      </div>
      <div className={cn(styles.decor, styles.small)}>
        <CircleGreen />
      </div>
      <div className={cn(styles.decor, styles.big)}>
        <CircleViolet />
      </div>
    </div>
  )
}
