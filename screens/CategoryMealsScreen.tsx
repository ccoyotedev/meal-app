import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const CategoryMealsScreen: NavigationStackScreenComponent = ({navigation}) => {
    const catId = navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = ({item}: {item: Meal}) => {
      return (
        <MealItem
          title={item.title}
          onPress={() => {
            navigation.navigate({
              routeName: 'MealDetail',
              params: {mealId: item.id}
            })
          }}
          duration={item.duration}
          complexity={item.complexity}
          affordability={item.affordability}
          image={item.imageUrl}
        />
      )
    }

    return (
      <View style={styles.screen}>
        <FlatList
          data={displayedMeals}
          renderItem={renderMealItem}
          style={{width: '100%'}}
        />
      </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen