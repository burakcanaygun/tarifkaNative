import React from 'react';

import {FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';
import styles from './Meals.styles';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Meals = ({navigation, route}) => {
  const {categoryName} = route.params;
  const {data, error, loading} = useFetch(
    `${Config.API_URL}${Config.FILTER_BY_CATEGORIES}${categoryName}`,
  );
  const {meals} = data;
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  const renderMeals = ({item}) => (
    <MealCard
      mealImage={item.strMealThumb}
      mealName={item.strMeal}
      handleMealDetails={() => handleMealDetails(item.strMeal)}
    />
  );
  const handleMealDetails = mealDetails => {
    navigation.navigate('DetailPage', {mealDetails});
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMeals}
        keyExtractor={item => item.idMeal.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default Meals;
