import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealsList = props => {
    const favoriteMeals = useSelector(state=> state.meals.favoriteMeals);
    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal=>meal.id === itemData.item.id);
        return(
          <MealItem 
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          duration ={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability} 
          onSelectMeal={()=>{
              props.navigation.navigate({
                  routeName:'MealDetail', 
                  params:{
                  mealId:itemData.item.id,
                  mealTitle:itemData.item.title,
                  isFav:isFavorite
              }
            })
          }}/>
        );
    }
    return (
        <View style={styles.screen}>
         <FlatList
          data={props.listData}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealItem}
          style={{ width: '100%' }}
      />
    </View>)
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealsList;