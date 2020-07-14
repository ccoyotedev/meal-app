import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack'
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


const CategoriesScreen: NavigationStackScreenComponent = ({navigation}) => {
  const renderGridItem = ({ item }: {item: Category}) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id
            }
          })
        }}
      />
    )
  }

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
}

CategoriesScreen.navigationOptions = (navData) => {
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

export default CategoriesScreen