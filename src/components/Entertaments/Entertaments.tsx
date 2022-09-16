import React, { useEffect, useState } from 'react'
import styles from './Entertaments.module.scss'
import entertament from '~/entertament.json'
import { Filter } from '@/types/types'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'

const temp: Filter = []
const filters: Filter = entertament
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

export function Entertaments() {
  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState(entertament)

  useEffect(() => {
    if (!activeFilters.length) {
      setShownObjects(entertament)
    } else {
      setShownObjects(
        entertament.filter(({ tags }) =>
          activeFilters.every((el) => tags.includes(el))
        )
      )
    }
  }, [activeFilters])

  return (
    <div className={styles.wrapper} id="#entertament">
      <h2 className={styles.title}>Куда сходить</h2>
      <Filters
        filters={filters}
        activeFilters={activeFilters}
        setActiveFilter={setActiveFilter}
        colorType="pinkGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="pinkGr" />
    </div>
  )
}
