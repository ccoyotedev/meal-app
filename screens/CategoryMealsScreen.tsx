import React from 'react'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen: NavigationStackScreenComponent = ({navigation}) => {
    const catId = navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
      <MealList
        listData={displayedMeals}
        onPress={(id) => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {mealId: id}
          })
        }}
      />
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  if (typeof selectedCategory === 'undefined') {
    return {
      headerTitle: 'Category Meals',
    };
  }
  return {
    headerTitle: selectedCategory.title,
  }
};


export default CategoryMealsScreen