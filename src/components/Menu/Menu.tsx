import React, { useState } from 'react'
import styles from './Menu.module.scss'
import cn from 'classnames'
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

  return (
    <nav className={styles.wrapper}>
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.name}`}
          className={cn(styles.navItem, {
            [styles.isActive]: active === item.name,
          })}
          onClick={() => setActive(item.name)}
        >
          {item.text}
        </a>
      ))}
    </nav>
  )
}
