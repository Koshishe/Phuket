import React, { useEffect, useState } from 'react'
import styles from './Entertaments.module.scss'
import entertament from '~/entertament.json'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'
import { filterItems, filterTags } from '@/utils/utils'
import { BlockContent, Filter } from '@/types/types'

const filters: Filter = filterTags(entertament)

export function Entertaments() {
  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState<BlockContent[]>(entertament)

  const handleActiveFilter = (value: string[]) => {
    if (filters.length === value.length) {
      setActiveFilter([])
    } else {
      setActiveFilter(value)
    }
  }

  useEffect(() => {
    if (!activeFilters.length) {
      setShownObjects(entertament)
    } else {
      setShownObjects(filterItems(entertament, activeFilters))
    }
  }, [activeFilters])

  return (
    <div className={styles.wrapper} id="entertament">
      <h2 className={styles.title}>Куда сходить</h2>
      <Filters
        filters={filters}
        activeFilters={activeFilters}
        setActiveFilter={handleActiveFilter}
        colorType="pinkGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="pinkGr" />
    </div>
  )
}
