import React from 'react'
import { FlatList, View, StyleSheet} from 'react-native';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

interface MealListProps {
  listData: Meal[],
  onSelect: (item: Meal) => void
}

const MealList: React.FC<MealListProps> = ({listData, onSelect}) => {
  const renderMealItem = ({item}: {item: Meal}) => {
    return (
      <MealItem
        item={item}
        onPress={() => onSelect(item)}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealList