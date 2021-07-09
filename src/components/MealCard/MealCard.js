import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({mealName, mealImage, handleMealDetails}) => {
  return (
    <TouchableOpacity onPress={handleMealDetails}>
      <View style={styles.container}>
        <Image style={styles.mealImage} source={{uri: mealImage}} />
        <View style={styles.mealNameContainer}>
          <Text numberOfLines={1} style={styles.mealText}>
            {mealName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealCard;
