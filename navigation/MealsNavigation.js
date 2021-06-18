import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealScreen from '../components/screens/CategoryMealScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';
import COLOR from '../constant/Colors';
import FavoritesScreen from '../components/screens/FavoritesScreen';

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
Meals:MealsNavigator,
Favorites:FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);