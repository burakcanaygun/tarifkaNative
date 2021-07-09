/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './pages/Categories';
import Details from './pages/Details';
import Meals from './pages/Meals';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'CategoriesPage'}
          component={Categories}
          options={{title: 'Categories'}}
        />
        <Stack.Screen
          name={'MealsPage'}
          component={Meals}
          options={{title: 'Meals'}}
        />
        <Stack.Screen
          name={'DetailPage'}
          component={Details}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
