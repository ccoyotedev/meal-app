import React from 'react';
import { Text, StyleSheet } from 'react-native';
import DefaultStyles from '../constants/DefaultStyles';
import Colors from '../constants/Colors';

interface MealDetailsProps {
  affordability: 'affordable' | 'pricey' | 'luxurious';
  complexity: 'simple' | 'hard' | 'challenging';
  duration: number;
}

const MealDetails: React.FC<MealDetailsProps> = ({affordability, complexity, duration}) => {

    const renderComplexityColor = () => {
      switch (complexity) {
        case ('simple'):
          return styles.green;
        case ('hard'):
          return styles.yellow;
        case ('challenging'):
          return styles.red;
        default:
          return null
      }
    }

    const renderDurationColor = () => {
      switch (true) {
        case (duration <= 30):
          return styles.green;
        case (duration <= 60):
          return styles.yellow;
        case (duration > 60):
          return styles.red;
        default:
          return null
      }
    }

    const renderAffordabilityColor = () => {
      switch (affordability) {
        case ('affordable'):
          return styles.green;
        case ('pricey'):
          return styles.yellow;
        case ('luxurious'):
          return styles.red;
        default:
          return null
      }
    }

    return (
      <>
        <Text style={{...DefaultStyles.baseText, ...renderDurationColor()}}>
          {duration}m
        </Text>
        <Text style={{...DefaultStyles.baseText, ...renderComplexityColor()}}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={{...DefaultStyles.baseText, ...renderAffordabilityColor()}}>
          {affordability.toUpperCase()}
        </Text>
      </>
    );
}

const styles = StyleSheet.create({
  green: {
    color: Colors.primaryColor
  },
  yellow: {
    color: Colors.accentColor
  },
  red: {
    color: Colors.warningColor
  }
})

export default MealDetails;