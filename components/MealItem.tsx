import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Meal from '../models/meal';

interface MealItemProps {
  title: string,
  onPress: () => void,
  duration: number,
  affordability: string,
  complexity: string,
  image: string
}

const MealItem: React.FC<MealItemProps> = ({title, onPress, duration, affordability, complexity, image}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: image}} style={styles.image}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <Text>
              {duration}
            </Text>
            <Text>
              {complexity.toUpperCase()}
            </Text>
            <Text>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
  mealRow: {
    flexDirection: 'row'
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default MealItem