import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CategoryGridTileProps {
  onPress: () => void,
  title: string,
  color: string
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({onPress, title, color}) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => onPress()}
        activeOpacity={0.7}
      >
        <View style={{...styles.container, ...{backgroundColor: color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'right'
  }
})

export default CategoryGridTile