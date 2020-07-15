import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultStyles from '../constants/DefaultStyles';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

interface ListItemProps {
  children: string
}

const ListItem: React.FC<ListItemProps> = ({children}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{children}</Text>
    </View>
  )
}


const MealDetailScreen: NavigationStackScreenComponent = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    if (!selectedMeal) {
      return (
        <View>
          <Text>
            Something went wrong
          </Text>
        </View>
      )
    }

    return (
      <ScrollView>
        <Image
          source={{uri: selectedMeal.imageUrl}}
          style={styles.image}
        />
        <View style={styles.mealDetails}>
          <MealDetails
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
            duration={selectedMeal.duration}
          />
        </View>
        <Text style={{...DefaultStyles.titleText, ...styles.title}}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient, index) => <ListItem key={index}>{ingredient}</ListItem>)}
        <Text style={{...DefaultStyles.titleText, ...styles.title}}>Steps</Text>
        {selectedMeal.steps.map((step, index) => <ListItem key={index}>{step}</ListItem>)}
      </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal ? selectedMeal.title : 'Loading',
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Favourite" iconName="ios-star" onPress={() => console.log('I like')}/>
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  mealDetails: {
    flexDirection: 'row',
    height: 50,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },
  listText: {
    fontFamily: 'open-sans'
  }
});

export default MealDetailScreen