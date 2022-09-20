import React, { useEffect, useState } from 'react'
import styles from './Entertaments.module.scss'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'
import { filterItems, filterTags } from '@/utils/utils'
import { BlockContent } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import {
  entertamentFiltersSelector,
  entertamentSelector,
} from '@/state/selectors'
import { filterEntertament } from '@/state/actions'

export function Entertaments() {
  const dispatch = useDispatch()
  const entertament = useSelector(entertamentSelector)
  const entertamentFilters = useSelector(entertamentFiltersSelector)

  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState<BlockContent[]>(entertament)

  const handleActiveFilter = (value: string[]) => {
    if (entertamentFilters.length === value.length) {
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

  useEffect(() => {
    dispatch(filterEntertament(filterTags(entertament)))
  }, [])

  return (
    <div className={styles.wrapper} id="entertament">
      <h2 className={styles.title}>Куда сходить</h2>
      <Filters
        filters={entertamentFilters}
        activeFilters={activeFilters}
        setActiveFilter={handleActiveFilter}
        colorType="pinkGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="pinkGr" />
    </div>
  )
}
