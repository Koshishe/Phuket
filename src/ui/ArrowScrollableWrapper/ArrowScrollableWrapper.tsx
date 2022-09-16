import React, { ReactElement, useEffect, useState } from 'react'
import styles from './ArrowScrollableWrapper.module.scss'

type Props = {
  wrapperRef: React.RefObject<HTMLDivElement>
  shift: number
  children: ReactElement
}

export const ArrowScrollableWrapper: React.FC<Props> = ({
  wrapperRef,
  shift,
  children,
}) => {
  const [showStartScroll, setShowStartScroll] = useState<boolean>(false)
  const [showEndScroll, setShowEndScroll] = useState<boolean>(true)

  useEffect(() => {
    const element = wrapperRef.current
    if (!element) {
      return
    }

    const listener = () => {
      setShowStartScroll(element.scrollLeft !== 0)
      setShowEndScroll(
        element.scrollWidth >= element.scrollLeft + element.clientWidth + 5
      )
    }

    listener()

    window.addEventListener('resize', listener)
    element.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('resize', listener)
      element?.removeEventListener('scroll', listener)
    }
  }, [wrapperRef.current])

  const ArrowIcon = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.45541 3.05617C6.10098 3.20861 5.89723 3.64183 6.05294 3.91182C6.08252 3.96312 7.50312 5.35372 9.20982 7.00204L12.3129 9.99892L9.20111 13.0007C5.75897 16.321 5.94522 16.11 6.10369 16.5098C6.18647 16.7187 6.42465 16.9331 6.61978 16.9744C6.97609 17.0498 6.81806 17.1854 10.4726 13.6701C12.3452 11.8689 13.9055 10.344 13.9399 10.2814C14.0201 10.1356 14.02 9.8958 13.9397 9.75023C13.8637 9.6125 7.10809 3.10907 6.97237 3.04297C6.84493 2.98091 6.61685 2.98673 6.45541 3.05617Z"
          fill="#CECECE"
        />
      </svg>
    )
  }

  return (
    <div className={styles.listWrapper}>
      {showStartScroll && (
        <div
          className={styles.buttonLeft}
          onClick={() =>
            wrapperRef.current?.scrollBy({ left: -shift, behavior: 'smooth' })
          }
        >
          <ArrowIcon />
        </div>
      )}
      {children}
      {showEndScroll && (
        <div
          className={styles.buttonRight}
          onClick={() =>
            wrapperRef.current?.scrollBy({ left: shift, behavior: 'smooth' })
          }
        >
          <ArrowIcon />
        </div>
      )}
    </div>
  )
}
