import React from 'react'
import styles from './Plate.module.scss'
import { Menu } from '@/components/Menu/Menu'
import { CircleGreen } from '@/ui/svg/CircleGreen'
import { CircleViolet } from '@/ui/svg/CircleViolet'
import cn from 'classnames'

export function Plate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div
          className={styles.image}
          style={{ backgroundImage: "url('./images/plate/main.png')" }}
        />
        <div>
          <h1 className={styles.title}>Пхукет</h1>
          <p className={styles.subtitle}>Таиланд</p>
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
