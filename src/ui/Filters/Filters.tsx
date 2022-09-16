import styles from './Filters.module.scss'
import { TagItem } from '@/ui/TagItem/TagItem'
import { ArrowScrollableWrapper } from '@/ui/ArrowScrollableWrapper/ArrowScrollableWrapper'
import React, { useRef } from 'react'
import { ColorType } from '@/types/types'

type Props = {
  filters: string[]
  activeFilters: string[]
  setActiveFilter: (value: string[]) => void
  colorType: ColorType
}

export function Filters({
  filters,
  activeFilters,
  setActiveFilter,
  colorType,
}: Props) {
  const filterRef = useRef<HTMLDivElement | null>(null)
  const filterItemRef = useRef<HTMLButtonElement | null>(null)

  const setFilterItemRefRef = (ref: HTMLButtonElement | null) => {
    filterItemRef.current = ref
  }

  const handleSelectFilter = (value: string) => {
    if (value !== 'all') {
      if (activeFilters.includes(value)) {
        setActiveFilter(activeFilters.filter((item) => item !== value))
      } else {
        setActiveFilter([...activeFilters, value])
      }
    } else {
      setActiveFilter([])
    }
  }

  return (
    <ArrowScrollableWrapper
      shift={filterItemRef.current?.offsetWidth || 0}
      wrapperRef={filterRef}
    >
      <div className={styles.filters} ref={filterRef}>
        <TagItem
          colorType={colorType}
          onClick={() => handleSelectFilter('all')}
          text="Все"
          active={!activeFilters.length}
          setRef={setFilterItemRefRef}
        />
        {filters.map((tag) => (
          <TagItem
            key={tag}
            text={tag}
            active={activeFilters.includes(tag)}
            colorType={colorType}
            onClick={() => handleSelectFilter(tag)}
            setRef={setFilterItemRefRef}
          />
        ))}
      </div>
    </ArrowScrollableWrapper>
  )
}
