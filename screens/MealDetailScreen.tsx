import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultStyles from "../constants/DefaultStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { toggleFavourite } from "../store/actions/meals";
import MealDetails from "../components/MealDetails";

interface ListItemProps {
  children: string;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{children}</Text>
    </View>
  );
};

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const allMeals = useSelector((state: RootState) => state.meals.meals);
  const mealId = navigation.getParam("mealId");
  const isFavourite = useSelector((state: RootState) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = allMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: isFavourite });
  }, [isFavourite]);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.mealDetails}>
        <MealDetails
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
        />
      </View>
      <Text style={{ ...DefaultStyles.titleText, ...styles.title }}>
        Ingredients
      </Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}
      <Text style={{ ...DefaultStyles.titleText, ...styles.title }}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavourite = navigationData.navigation.getParam("toggleFav");
  const isFavourite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  mealDetails: {
    flexDirection: "row",
    height: 50,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  listText: {
    fontFamily: "open-sans",
  },
});

export default MealDetailScreen;
