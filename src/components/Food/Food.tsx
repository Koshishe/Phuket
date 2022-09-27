import React, { useEffect, useState } from 'react'
import styles from './Food.module.scss'
import { BlockContent } from '@/types/types'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'
import { filterItems, filterTags } from '@/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { filterFood } from '@/state/actions'
import { foodFiltersSelector, foodSelector } from '@/state/selectors'

export function Food() {
  const dispatch = useDispatch()
  const food = useSelector(foodSelector)
  const foodFilters = useSelector(foodFiltersSelector)

  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState<BlockContent[]>(food)

  const handleActiveFilter = (value: string[]) => {
    if (foodFilters.length === value.length || !value.length) {
      setActiveFilter([])
      setShownObjects(food)
    } else {
      setActiveFilter(value)
      setShownObjects(filterItems(food, value))
    }
  }

  useEffect(() => {
    dispatch(filterFood(filterTags(food)))
  }, [])

  return (
    <div className={styles.wrapper} id="food">
      <h2 className={styles.title}>Где поесть</h2>
      <Filters
        filters={foodFilters}
        activeFilters={activeFilters}
        setActiveFilter={handleActiveFilter}
        colorType="blueGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="blueGr" />
    </div>
  )
}
