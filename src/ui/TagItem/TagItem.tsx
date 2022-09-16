import React, { ReactElement } from 'react'
import styles from './TagItem.module.scss'
import cn from 'classnames'
import { ColorType } from '@/types/types'

type Props = {
  colorType: ColorType
  onClick: () => void
  active?: boolean
  text: string | ReactElement
  setRef?(ref: HTMLButtonElement | null): void
}

export const TagItem: React.FC<Props> = ({
  colorType,
  onClick,
  active,
  text,
  setRef,
}) => {
  const handleSetRef = (ref?: HTMLButtonElement | null) => {
    if (ref && setRef) {
      setRef(ref)
    }
  }
  return (
    <button
      ref={handleSetRef}
      className={cn(styles.tag, styles[colorType], {
        [styles.active]: active,
      })}
      onClick={onClick}
    >
      <span className={styles.content}>{text}</span>
    </button>
  )
}
