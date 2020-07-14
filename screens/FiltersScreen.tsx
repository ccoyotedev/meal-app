import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


const FiltersScreen: NavigationStackScreenComponent = ({navigation}) => {
    return (
      <View style={styles.screen}>
        <Text>The Filters Screen</Text>
      </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
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

export default FiltersScreen