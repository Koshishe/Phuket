import { BlockContent, Filter } from '@/types/types'

const temp: Filter = []
export const filterTags = (items: BlockContent[]) => {
  return items
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
}

export const filterItems = (
  items: BlockContent[],
  filters: Filter
): BlockContent[] => {
  return items.filter(
    ({ tags }) => tags.filter((el) => filters.includes(el)).length
  )
}
