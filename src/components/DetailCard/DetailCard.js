import React from 'react';

import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailCard.styles';

const DetailCard = ({meal}) => {
  const {strArea, strMealThumb, strMeal, strInstructions, strYoutube} = meal;
  return (
    <View style={styles.container}>
      <Image style={styles.mealImage} source={{uri: strMealThumb}} />
      <Text style={styles.mealTitle}>{strMeal}</Text>
      <Text style={styles.mealArea}>{strArea}</Text>
      <View style={styles.mealDescription}>
        <Text>{strInstructions}</Text>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL(strYoutube)}
        style={styles.youtubeButton}>
        <Text style={styles.youtubeText}>Watch On Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
