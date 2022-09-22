import { createStore, combineReducers } from 'redux'
import {
  entertamentFiltersReducer,
  entertamentReducer,
  foodFiltersReducer,
  foodReducer,
  todoFiltersReducer,
  todoReducer,
} from './reducers'
import { BlockContent } from '@/types/types'

export interface IState {
  food: BlockContent[]
  entertament: BlockContent[]
  todo: BlockContent[]
  foodFilters: string[]
  entertamentFilters: string[]
  todoFilters: string[]
}

export const initialState: IState = {
  food: [],
  entertament: [],
  todo: [],
  foodFilters: [],
  entertamentFilters: [],
  todoFilters: [],
}

const reducers = combineReducers({
  foodFilters: foodFiltersReducer,
  entertamentFilters: entertamentFiltersReducer,
  todoFilters: todoFiltersReducer,
  food: foodReducer,
  entertament: entertamentReducer,
  todo: todoReducer,
})

export const store = createStore(reducers, initialState)
