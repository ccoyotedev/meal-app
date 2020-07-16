import { createStore, combineReducers } from 'redux';
import mealsReducer from './reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer);