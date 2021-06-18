import { Platform } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealScreen from '../components/screens/CategoryMealScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';
import COLOR from '../constant/Colors';
import FavoritesScreen from '../components/screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
  Categories:CategoriesScreen,
  MealDetail:MealDetailScreen,
  CategoryMeals:{
      screen:CategoryMealScreen
  }  
  }, { defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:Platform.OS=== 'android' ? COLOR.primaryColor :'white'
    },
    headerTintColor:Platform.OS=== 'android' ? 'white' : COLOR.primaryColor
  }

});

const MealsFavTabNavigator = createBottomTabNavigator({
Meals:{screen:MealsNavigator, navigationOptions:{
  tabBarIcon:(tabInfo) => {
    return<Ionicons 
      name="ios-restaurant" 
      size={25}
      color={tabInfo.tintColor}/>
  }
}},
Favorites:{
  screen:FavoritesScreen,
  navigationOptions:{
  tabBarlabel:'Favorites',  
  tabBarIcon:(tabInfo) => {
    return<Ionicons 
      name="ios-star" 
      size={25}
      color={tabInfo.tintColor}/>
  }
}}
},{
tabBarOptions: {
  activeTintColor: COLOR.accentColor,
  labelStyle: {
    fontSize: 14,
  },
  // style: {
  //   backgroundColor: 'blue',
  // },
}
});

export default createAppContainer(MealsFavTabNavigator);