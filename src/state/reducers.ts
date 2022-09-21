import { BlockContent } from '@/types/types'
import { initialState } from '@/state/index'

export function foodFiltersReducer(
  state: string[] = initialState.foodFilters,
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case 'FILTER_FOOD': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export function entertamentFiltersReducer(
  state: string[] = initialState.entertamentFilters,
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case 'FILTER_ENTERTAMENT': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export function todoFiltersReducer(
  state: string[] = initialState.todoFilters,
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case 'FILTER_TODO': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export function foodReducer(
  state: BlockContent[] = initialState.food,
  action: { type: string; payload: BlockContent[] }
): BlockContent[] {
  console.log(action)
  switch (action.type) {
    case 'ADD_FOOD': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export function entertamentReducer(
  state: BlockContent[] = initialState.entertament,
  action: { type: string; payload: BlockContent[] }
): BlockContent[] {
  switch (action.type) {
    case 'ADD_ENTERTAMENT': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export function todoReducer(
  state: BlockContent[] = initialState.todo,
  action: { type: string; payload: BlockContent[] }
): BlockContent[] {
  switch (action.type) {
    case 'ADD_TODO': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
