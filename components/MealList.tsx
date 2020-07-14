import React from 'react'
import { FlatList, View, StyleSheet} from 'react-native';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

interface MealListProps {
  listData: Meal[],
  onPress: (id: string) => void
}

const MealList: React.FC<MealListProps> = ({listData, onPress}) => {
  const renderMealItem = ({item}: {item: Meal}) => {
    return (
      <MealItem
        item={item}
        onPress={() => onPress(item.id)}
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