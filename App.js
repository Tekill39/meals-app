
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as  Font from 'expo-font';
import { useFonts } from 'expo-font';
import MealsNavigation from './navigation/MealsNavigation';
import {enableScreens} from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux';



enableScreens();

const rootReducer = combineReducers({
  meals:mealsReducer
});

const store = createStore(rootReducer);


export default function App() {
  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MealsNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
