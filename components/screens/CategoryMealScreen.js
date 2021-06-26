import React from 'react';
import {CATEGORIES, MEALS} from '../../data/dummy-data';
import MealsList from '../MealsList';


const CategoryMealScreen = props => {
    
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
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