import React, {useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../HeaderButtons';
import DefaultText from '../DefaultText';
import { toggleFavorite } from '../../store/actions/meals';

const ListItem = props => {   
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);        
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFavorite = useSelector(state=>
         state.meals.favoriteMeals.some(meal=> meal.id === mealId));
    const selectedMeal = availableMeals.find(meal=> meal.id === mealId);
    
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(()=> {
       // props.navigation.setParams({mealTitle: selectedMeal.title})
       props.navigation.setParams({toggleFav:toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(()=> {
        props.navigation.setParams({isFav: currentMealIsFavorite});
    }, [currentMealIsFavorite]);
    
  return(
      <ScrollView>
          <Image source={{uri:selectedMeal.imageUrl}} style = {styles.image} />
          <View style={styles.detail}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
          </View>
          <Text style={styles.title}>Ingredients</Text>
          {selectedMeal.ingredients.map(ingredient=> (
              <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
          <Text style={styles.title}>Steps</Text>
          {selectedMeal.steps.map(step=> (
              <ListItem key={step}>{step}</ListItem>
          ))}
        </ScrollView>);
};
MealDetailScreen.navigationOptions = (navigationData)=> {
    // const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');


    // const selectedMeal = MEALS.find(meal=> meal.id === mealId);
    return{
        headerTitle:mealTitle ,
        headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title="Favorite" 
            iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavorite}/>
        </HeaderButtons>)
    };
}
const styles = StyleSheet.create({
    
    image:{
        width:'100%',
        height:200
    },
    detail:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding: 10     
    }
});

export default MealDetailScreen;