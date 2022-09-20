import { BlockContent, Filter } from '@/types/types'

export const filterTags = (items: BlockContent[]) => {
  const temp: Filter = []
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

export const scrollToElement = (
  element: HTMLElement | null,
  behavior: ScrollBehavior = 'smooth',
  offset = 24
) => {
  if (element) {
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset

    window.scroll({ top, behavior })
  }
}
