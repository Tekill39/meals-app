import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealScreen from '../components/screens/CategoryMealScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories:CategoriesScreen,
  MealDetail:MealDetailScreen,
  CategoryMeals:{
      screen:CategoryMealScreen
  } 
});

export default createAppContainer(MealsNavigator);