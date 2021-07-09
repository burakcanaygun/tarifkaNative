import React from 'react';

import {FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Details = ({route}) => {
  const {mealDetails} = route.params;
  const {data, error, loading} = useFetch(
    `${Config.API_URL}${Config.NAME_FILTER}${mealDetails}`,
  );
  const {meals} = data;
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  const renderMeals = ({item}) => <DetailCard meal={item} />;
  return (
    <View>
      <FlatList
        data={meals}
        renderItem={renderMeals}
        keyExtractor={item => item.idMeal.toString()}
      />
    </View>
  );
};

export default Details;
