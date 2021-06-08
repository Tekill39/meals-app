import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealScreen from '../components/screens/CategoryMealScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';
import COLOR from '../constant/Colors';

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

export default createAppContainer(MealsNavigator);