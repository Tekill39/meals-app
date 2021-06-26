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
import { createDrawerNavigator } from 'react-navigation-drawer';
import FilterScreen from '../components/screens/FilterScreen';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { BottomNavigation } from 'react-native-paper';

const defaultStackNavOptions = {
   
    headerStyle:{
      backgroundColor:Platform.OS === 'android' ? COLOR.primaryColor :'white'
    },
    headerTitleStyle:{
      fontFamily:'open-sans'
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : COLOR.primaryColor,
    headerTitle:'A Screen'
}
const MealsNavigator = createStackNavigator({
  Categories:CategoriesScreen,
  MealDetail:MealDetailScreen,
  CategoryMeals:{
      screen:CategoryMealScreen
  }  
  }, { defaultNavigationOptions:defaultStackNavOptions
});

const FavNavigator = createStackNavigator(
{
  Favorites:FavoritesScreen,
  MealDetail:MealDetailScreen
},
{
  defaultNavigationOptions:defaultStackNavOptions
}
);

const MealsFavTabNavigator = createBottomTabNavigator({
Meals: {
  screen:MealsNavigator,
  navigationOptions:{
  tabBarIcon:(tabInfo) => {
    return<Ionicons 
      name="ios-restaurant" 
      size={25}
      color={tabInfo.tintColor}/>
  },
  tabBarColor:COLOR.primaryColor
}},
Favorites:{
  screen:FavNavigator,
  navigationOptions:{
  tabBarlabel:'Favorites',  
  tabBarIcon:(tabInfo) => {
    return<Ionicons 
      name="ios-star" 
      size={25}
      color={tabInfo.tintColor}/>
  },
  tabBarColor:COLOR.accentColor
}}
},{
tabBarOptions: {
  activeTintColor: COLOR.accentColor,
  labelStyle: {
    fontSize: 14,
  },
  // style: {
  //   backgroundColor: COLOR.accentColor,
  // },
}
});
const FilterNavigator = createStackNavigator({
  Filters:FilterScreen
},
// {
//   navigationOptions:{
//     drawerLabel:'Filters!!!'
//   }
// }, 
{ defaultNavigationOptions:defaultStackNavOptions
});
const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen:MealsFavTabNavigator,
  navigationOptions:{
    drawerLabel:'Meals'
  }},
  Filters:FilterNavigator
},{
  contentOptions:{
    activeTintColor:COLOR.accentColor,
    labelStyle:{
      fontFamily:'open-sans-bold'
    }
  }

});

export default createAppContainer(MainNavigator);