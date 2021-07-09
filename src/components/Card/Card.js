import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Card.styles';

const Card = ({categoryName, categoryImage, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.cardContainer}>
        <Image source={{uri: categoryImage}} style={styles.cardImage} />
        <View style={styles.cardBodyContainer}>
          <Text style={styles.category}>{categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
