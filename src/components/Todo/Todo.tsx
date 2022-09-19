import React, { useEffect, useState } from 'react'
import styles from './Todo.module.scss'
import todo from '~/todo.json'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'
import { filterItems, filterTags } from '@/utils/utils'
import { BlockContent, Filter } from '@/types/types'

const filters: Filter = filterTags(todo)

export function Todo() {
  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState<BlockContent[]>(todo)

  const handleActiveFilter = (value: string[]) => {
    if (filters.length === value.length) {
      setActiveFilter([])
    } else {
      setActiveFilter(value)
    }
  }

  useEffect(() => {
    if (!activeFilters.length) {
      setShownObjects(todo)
    } else {
      setShownObjects(filterItems(todo, activeFilters))
    }
  }, [activeFilters])

  return (
    <div className={styles.wrapper} id="todo">
      <h2 className={styles.title}>Чем заняться</h2>
      <Filters
        filters={filters}
        activeFilters={activeFilters}
        setActiveFilter={handleActiveFilter}
        colorType="greenGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="greenGr" />
    </div>
  )
}
