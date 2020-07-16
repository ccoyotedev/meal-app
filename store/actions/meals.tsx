export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

interface toggleFavouriteAction {
  type: typeof TOGGLE_FAVORITE,
  mealId: string
}

interface Filters {
  glutenFree: boolean,
  lactoseFree: boolean,
  vegetarian: boolean,
  vegan: boolean
}

interface setFiltersAction {
  type: typeof SET_FILTERS,
  filters: Filters
}

export type MealActionTypes = toggleFavouriteAction | setFiltersAction;

export function toggleFavourite(mealId: string): MealActionTypes {
  return {
    type: TOGGLE_FAVORITE,
    mealId
  }
}

export function setFilters(filters: Filters): MealActionTypes {
  return {
    type: SET_FILTERS,
    filters
  }
}