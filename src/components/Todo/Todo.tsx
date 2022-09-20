import React, { useEffect, useState } from 'react'
import styles from './Todo.module.scss'
import { Filters } from '@/ui/Filters/Filters'
import { BlocksList } from '@/ui/BlocksList/BlocksList'
import { filterItems, filterTags } from '@/utils/utils'
import { BlockContent } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { todoFiltersSelector, todoSelector } from '@/state/selectors'
import { filterTodo } from '@/state/actions'

export function Todo() {
  const dispatch = useDispatch()
  const todo = useSelector(todoSelector)
  const todoFilters = useSelector(todoFiltersSelector)

  const [activeFilters, setActiveFilter] = useState<string[]>([])
  const [shownObjects, setShownObjects] = useState<BlockContent[]>(todo)

  const handleActiveFilter = (value: string[]) => {
    if (todoFilters.length === value.length) {
      setActiveFilter([])
    } else {
      setActiveFilter(value)
    }
  }

  useEffect(() => {
    dispatch(filterTodo(filterTags(todo)))
  }, [])

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
        filters={todoFilters}
        activeFilters={activeFilters}
        setActiveFilter={handleActiveFilter}
        colorType="greenGr"
      />
      <BlocksList shownObjects={shownObjects} colorType="greenGr" />
    </div>
  )
}
