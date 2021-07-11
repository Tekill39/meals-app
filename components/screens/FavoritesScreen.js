import React from 'react';
import {View,  StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../MealsList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../HeaderButtons';
import DefaultText from '../DefaultText';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length ===0 || !favMeals) {
    return <View style={styles.content}>
      <DefaultText>No faorite meals found. Start adding some!</DefaultText>
      </View>
  }

  return <MealsList listData={favMeals} navigation={props.navigation}/>
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
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FavoritesScreen;