import React, { ReactElement } from 'react'
import styles from './TagItem.module.scss'
import cn from 'classnames'

type Props = {
  colorType: 'pinkGr' | 'blueGr' | 'greenGr'
  onClick: () => void
  active?: boolean
  text: string | ReactElement
}

export const TagItem: React.FC<Props> = ({
  colorType,
  onClick,
  active,
  text,
}) => (
  <button
    className={cn(styles.tag, styles[colorType], {
      [styles.active]: active,
    })}
    onClick={onClick}
  >
    <span className={styles.content}>{text}</span>
  </button>
)
