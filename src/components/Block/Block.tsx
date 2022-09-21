import React from 'react'
import styles from './Block.module.scss'
import { BlockContent, ColorType } from '@/types/types'
import { Rating } from '@/ui/Rating/Rating'
import cn from 'classnames'
import Slider from 'react-slick'
import { Inst } from '@/ui/svg/Inst'
import { FB } from '@/ui/svg/FB'
import { TW } from '@/ui/svg/TW'
import { Web } from '@/ui/svg/Web'

type Props = {
  itemContent: BlockContent
  colorType: ColorType
  activePhoto?: boolean
  showActivePhoto?: (value?: string) => void
  openInfo?: boolean
  showOpenInfo?: (value?: string) => void
}
export function Block({
  itemContent,
  colorType,
  activePhoto,
  showActivePhoto,
  openInfo,
  showOpenInfo,
}: Props) {
  const { img, tags, title, mapLink, rating, socials, moreInfo, workTime } =
    itemContent

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    className: 'imgSlider',
  }

  return (
    <div className={cn(styles.block, styles[colorType])}>
      {img && img.length && (
        <div
          className={cn(styles.imgWrapper, {
            [styles.full]: activePhoto,
            [styles.closed]: openInfo,
          })}
          key={`${activePhoto}`}
        >
          <Slider {...settings}>
            {activePhoto ? (
              img.map((item) => (
                <div
                  key={item}
                  className={cn(styles.imgWrapper, {
                    [styles.full]: activePhoto,
                    [styles.closed]: openInfo,
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
                className={cn(styles.imgWrapper, {
                  [styles.full]: activePhoto,
                  [styles.closed]: openInfo,
                })}
              >
                <div
                  className={cn(styles.img)}
                  style={{ backgroundImage: `url(${img[0]})` }}
                />
              </div>
            )}
          </Slider>
        </div>
      )}
      <div className={cn(styles.content, { [styles.hidden]: activePhoto })}>
        <div className={styles.contentTop}>
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
          {openInfo && <div className={styles.info}>{moreInfo}</div>}
          <div className={styles.actions}>
            {moreInfo && (
              <div
                className={styles.showMore}
                onClick={() => {
                  showOpenInfo &&
                    (openInfo ? showOpenInfo() : showOpenInfo(title))
                }}
              >
                {openInfo ? 'Скрыть' : 'Подробнее'}
              </div>
            )}
            {img && img.length > 1 && !openInfo && (
              <div
                className={styles.showMore}
                onClick={() => {
                  showActivePhoto && showActivePhoto(title)
                }}
              >
                Больше фото
              </div>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <a
            href={mapLink}
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            Google Maps →
          </a>
          {socials && (
            <div className={styles.socials}>
              {socials.web && (
                <a
                  href={socials.web}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Web />
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Inst />
                </a>
              )}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FB />
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TW />
                </a>
              )}
            </div>
          )}
        </div>
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
