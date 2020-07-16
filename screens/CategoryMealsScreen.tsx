import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import MealList from "../components/MealList";
import DefaultStyles from '../constants/DefaultStyles';

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const catId = navigation.getParam("categoryId");
  const availableMeals = useSelector(
    (state: RootState) => state.meals.filteredMeals
  );
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length <= 0) {
    return (
      <View style={styles.container}>
        <Text style={DefaultStyles.baseText}>
          No meals found!
        </Text>
      </View>
    )
  }

  return (
    <MealList
      listData={displayedMeals}
      onSelect={(item) => {
        navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: item.id,
            mealTitle: item.title,
          },
        });
      }}
    />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  if (typeof selectedCategory === "undefined") {
    return {
      headerTitle: "Category Meals",
    };
  }
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoryMealsScreen;
