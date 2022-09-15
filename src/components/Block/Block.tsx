import React from 'react'
import styles from './Block.module.scss'
import { Socials } from '@/types/types'
import { Rating } from '@/ui/Rating/Rating'

type BlockContent = {
  img: string[]
  tags: string[]
  title: string
  mapLink: string
  rating: number
  socials?: Socials
  moreInfo?: string
  workTime?: string
}
type Props = {
  itemContent: BlockContent
}
export function Block({ itemContent }: Props) {
  const { img, tags, title, mapLink, rating, socials, moreInfo, workTime } =
    itemContent

  // eslint-disable-next-line no-console
  console.log(socials, moreInfo)

  return (
    <div className={styles.block}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img[0]})` }}
      />
      <div className={styles.content}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <Rating rating={rating} />
        </div>
        {workTime && (
          <div className={styles.workTime}>Часы работы: {workTime}</div>
        )}
        <a
          href={mapLink}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Google Maps →
        </a>
      </div>
    </div>
  )
}
