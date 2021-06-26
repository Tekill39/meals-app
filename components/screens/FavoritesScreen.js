import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealsList from '../MealsList';
import {MEALS} from '../../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../HeaderButtons';

const FavoritesScreen = props => {
    const favMEALS = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return <MealsList listData={favMEALS} navigation={props.navigation}/>
};

FavoritesScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Meal Your Favorites',
    headerLeft: (   
      <HeaderButtons  HeaderButtonComponent={HeaderButton}>
        <Item title="menu" iconName='ios-menu' color='#000000'
          onPress={()=>{
          navData.navigation.toggleDrawer();
        }}></Item>
      </HeaderButtons> 
     )
    };
  };

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FavoritesScreen;