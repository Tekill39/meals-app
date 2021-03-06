

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import COLOR from '../../constant/Colors';
import CategoryGridTile from '../CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButtons';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Meal Categories',
  headerLeft: (   
    <HeaderButtons  HeaderButtonComponent={HeaderButton}>
      <Item title="menu" iconName='ios-menu' color='#130f40'
        onPress={()=>{
        navData.navigation.toggleDrawer();
      }}></Item>
    </HeaderButtons> 
   )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;