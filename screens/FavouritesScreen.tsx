import React from 'react'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';
import { StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


const FavouritesScreen: NavigationStackScreenComponent = ({navigation}) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return (
    <MealList
      onPress={(id) => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {mealId: id}
        })
      }}
      listData={favMeals}
    />
  );
}

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName='ios-menu'
      />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen