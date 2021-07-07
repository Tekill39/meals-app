import React from 'react';
import {CATEGORIES} from '../../data/dummy-data';
import MealsList from '../MealsList';
import { useSelector } from 'react-redux';


const CategoryMealScreen = props => {
    
    const availableMeals = useSelector(state => state.meals.meals);

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return <MealsList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealScreen.navigationOptions = navigationData =>{
    const catId = navigationData.navigation.getParam('categoryId');   
   

    const selectCategory = CATEGORIES.find(cat=>cat.id === catId);

    return {
        headerTitle:selectCategory.title
    };
};



export default CategoryMealScreen;