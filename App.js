
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as  Font from 'expo-font';
import { useFonts } from 'expo-font';
import MealsNavigation from './navigation/MealsNavigation';


export default function App() {
  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <MealsNavigation/>
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
