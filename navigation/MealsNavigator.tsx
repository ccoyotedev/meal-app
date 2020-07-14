import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavouritesScreen from '../screens/FavouritesScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.accentColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
  }
}

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
}, defaultStackNavOptions);

const FavNavigator = createStackNavigator({
  Favourites: FavouritesScreen,
  MealDetail: MealDetailScreen
}, defaultStackNavOptions)

const tabScreenConfig = {
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo:any) => {
      return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.primaryColor
  }},
  Favourites: {screen: FavNavigator, navigationOptions: {
    tabBarIcon: (tabInfo:any) => {
      return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.accentColor
  }}
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: 'white',
      shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.accentColor
      }
    });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, defaultStackNavOptions)

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
})

export default createAppContainer(MainNavigator);