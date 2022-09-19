import styles from './BlockList.module.scss'
import { Block } from '@/components/Block/Block'
import React, { useState } from 'react'
import { BlockContent, ColorType } from '@/types/types'

type Props = {
  shownObjects: BlockContent[]
  colorType: ColorType
}

export function BlocksList({ shownObjects, colorType }: Props) {
  const [activePhoto, showActivePhoto] = useState<string | undefined>()
  const [openInfo, showOpenInfo] = useState<string | undefined>()
  return (
    <div className={styles.blocks}>
      {shownObjects.map((item) => (
        <Block
          key={item.id}
          itemContent={item}
          colorType={colorType}
          activePhoto={activePhoto === item.title}
          showActivePhoto={showActivePhoto}
          openInfo={openInfo === item.title}
          showOpenInfo={showOpenInfo}
        />
      ))}
    </div>
  )
}
