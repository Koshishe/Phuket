import React, { useEffect, useState } from 'react'
import styles from './Food.module.scss'
import food from '~/food.json'
import { Filter } from '@/types/types'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'

const temp: Filter = []
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

export function Food() {
  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState(food)

  useEffect(() => {
    if (!activeFilters.length) {
      setShownObjects(food)
    } else {
      setShownObjects(
        food.filter(({ tags }) =>
          activeFilters.every((el) => tags.includes(el))
        )
      )
    }
  }, [activeFilters])

  return (
    <div className={styles.wrapper} id="#food">
      <h2 className={styles.title}>Где поесть</h2>
      <Filters
        filters={filters}
        activeFilters={activeFilters}
        setActiveFilter={setActiveFilter}
        colorType="blueGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="blueGr" />
    </div>
  )
}
