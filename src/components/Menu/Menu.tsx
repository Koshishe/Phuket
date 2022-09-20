import React, { useState, MouseEvent } from 'react'
import styles from './Menu.module.scss'
import cn from 'classnames'
import { scrollToElement } from '@/utils/utils'
const menuItems = [
  {
    name: 'food',
    text: 'Где поесть',
  },
  {
    name: 'entertament',
    text: 'Куда сходить',
  },
  {
    name: 'todo',
    text: 'Чем заняться',
  },
]

export function Menu() {
  const [active, setActive] = useState<boolean | string>(false)

  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>, value: string) => {
    e.preventDefault()
    const scrollElement = document.getElementById(value)
    setActive(value)
    scrollToElement(scrollElement)
  }

  return (
    <nav className={styles.wrapper}>
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.name}`}
          className={cn(styles.navItem, {
            [styles.isActive]: active === item.name,
          })}
          onClick={(e) => handleMenuClick(e, item.name)}
        >
          {item.text}
        </a>
      ))}
    </nav>
  )
}
