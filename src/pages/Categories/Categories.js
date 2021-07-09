import React from 'react';

import {FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Card from '../../components/Card';
import styles from './Categories.styles';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(
    `${Config.API_URL}${Config.CATEGORIES}`,
  );
  const {categories} = data;
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  const renderCategories = ({item}) =>
    categories && (
      <Card
        categoryName={item.strCategory}
        categoryImage={item.strCategoryThumb}
        onClick={() => handleClick(item.strCategory)}
      />
    );

  const handleClick = categoryName => {
    navigation.navigate('MealsPage', {categoryName});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={item => item.idCategory.toString()}
        style={styles.listStyle}
      />
    </View>
  );
};
export default Categories;
