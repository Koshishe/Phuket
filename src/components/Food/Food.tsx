import React, { useState } from 'react'
import styles from './Food.module.scss'
import food from '~/food.json'
import { Filter } from '@/types/types'
import { TagItem } from '@/ui/TagItem/TagItem'
import { Block } from '@/components/Block/Block'

export function Food() {
  const temp: Filter = []
  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState(food)

  const filters: Filter = food
    .map((item) => item.tags)
    .flat()
    .filter((item) => {
      if (temp.includes(item)) {
        return false
      } else {
        temp.push(item)
        return true
      }
    })
  const handleSelectFilter = (value: string) => {
    if (value !== 'all') {
      if (activeFilters.includes(value)) {
        setActiveFilter(activeFilters.filter((item) => item !== value))
        // setShownObjects(food.filter(({tags}) => {
        //   activeFilters.forEach((value) => {
        //
        //   })
        // }))
      } else {
        setActiveFilter([...activeFilters, value])
      }
    } else {
      setActiveFilter([])
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Где поесть</h2>
      <div className={styles.filters}>
        <TagItem
          colorType="blueGr"
          onClick={() => handleSelectFilter('all')}
          text="Все"
          active={!activeFilters.length}
        />
        {filters.map((tag) => (
          <TagItem
            key={tag}
            text={tag}
            active={activeFilters.includes(tag)}
            colorType="blueGr"
            onClick={() => handleSelectFilter(tag)}
          />
        ))}
      </div>
      <div className={styles.blocks}>
        {shownObjects.map((item) => (
          <Block key={item.id} itemContent={item} />
        ))}
      </div>
    </div>
  )
}
