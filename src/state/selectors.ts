import { IState } from '@/state/index'

export const foodSelector = (state: IState) => state.food
export const entertamentSelector = (state: IState) => state.entertament
export const todoSelector = (state: IState) => state.todo
export const foodFiltersSelector = (state: IState) => state.foodFilters
export const entertamentFiltersSelector = (state: IState) =>
  state.entertamentFilters
export const todoFiltersSelector = (state: IState) => state.todoFilters
