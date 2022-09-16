import React from 'react'
import styles from './Block.module.scss'
import { BlockContent, ColorType } from '@/types/types'
import { Rating } from '@/ui/Rating/Rating'
import cn from 'classnames'
import Slider from 'react-slick'

type Props = {
  itemContent: BlockContent
  colorType: ColorType
  activePhoto?: boolean
  showActivePhoto?: (value?: string) => void
}
export function Block({
  itemContent,
  colorType,
  activePhoto,
  showActivePhoto,
}: Props) {
  const { img, tags, title, mapLink, rating, socials, moreInfo, workTime } =
    itemContent
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  // eslint-disable-next-line no-console
  console.log(socials, moreInfo)

  return (
    <div className={cn(styles.block, styles[colorType])}>
      <div
        className={cn(styles.imgWrapper, { [styles.full]: activePhoto })}
        key={`${activePhoto}`}
      >
        <Slider {...settings}>
          {activePhoto ? (
            img.map((item) => (
              <div
                key={item}
                className={cn(styles.imgWrapper, {
                  [styles.full]: activePhoto,
                })}
              >
                <div
                  className={cn(styles.img)}
                  style={{ backgroundImage: `url(${item})` }}
                />
              </div>
            ))
          ) : (
            <div
              className={cn(styles.imgWrapper, { [styles.full]: activePhoto })}
            >
              <div
                className={cn(styles.img)}
                style={{ backgroundImage: `url(${img[0]})` }}
              />
            </div>
          )}
        </Slider>
      </div>
      <div className={cn(styles.content, { [styles.hidden]: activePhoto })}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div key={tag} className={cn(styles.tag, styles[colorType])}>
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
        {img.length > 1 && (
          <div
            className={styles.morePhoto}
            onClick={() => {
              showActivePhoto && showActivePhoto(title)
            }}
          >
            Больше фото
          </div>
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
      {activePhoto && (
        <div className={styles.photoControls}>
          <div className={cn(styles.name, styles[colorType])}>{title}</div>
          <button
            className={cn(styles.buttonBack, styles[colorType])}
            title="Назад"
            onClick={() => {
              showActivePhoto && showActivePhoto()
            }}
          >
            ←
          </button>
        </div>
      )}
    </div>
  )
}
