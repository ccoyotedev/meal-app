import React from 'react'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack';
import { StyleSheet, View, Text } from 'react-native';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import DefaultStyles from '../constants/DefaultStyles';


const FavouritesScreen: NavigationStackScreenComponent = ({navigation}) => {
  const favMeals = useSelector((state:RootState) => state.meals.favouriteMeals);

  if (favMeals.length <= 0) {
    return (
      <View style={styles.content}>
        <Text style={DefaultStyles.baseText}>
          No favourite meals found... Start adding some!
        </Text>
      </View>
    )
  }

  return (
    <MealList
      onSelect={(item) => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: item.id,
            mealTitle: item.title
          }
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen