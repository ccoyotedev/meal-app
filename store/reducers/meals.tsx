import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import { TOGGLE_FAVORITE, MealActionTypes, SET_FILTERS } from '../actions/meals';

export interface MealsState {
  meals: Meal[],
  filteredMeals: Meal[],
  favouriteMeals: Meal[]
}

const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
}

function mealsReducer(state = initialState, action: MealActionTypes):MealsState {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const mealId = action.mealId;
      const existingIndex = state.favouriteMeals.findIndex((meal) => meal.id === mealId);
      if ( existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals}
      } else {
        const meal = state.meals.find(meal => meal.id === mealId);
        if (typeof meal === 'undefined') {
          return state;
        }
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal)}
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      })
      return { ...state, filteredMeals: filteredMeals}

    default:
      return state
  }
}

export default mealsReducer;