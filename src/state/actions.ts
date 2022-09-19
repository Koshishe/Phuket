import { BlockContent } from '@/types/types'

export const filterFood = (payload: string[]) => ({
  type: 'FILTER_FOOD',
  payload,
})

export const filterEntertament = (payload: string[]) => ({
  type: 'FILTER_ENTERTAMENT',
  payload,
})

export const filterTodo = (payload: string[]) => ({
  type: 'FILTER_TODO',
  payload,
})

export const addFood = (payload: BlockContent[]) => ({
  type: 'ADD_FOOD',
  payload,
})

export const addEntertament = (payload: BlockContent[]) => ({
  type: 'ADD_ENTERTAMENT',
  payload,
})

export const addTodo = (payload: BlockContent[]) => ({
  type: 'ADD_TODO',
  payload,
})
