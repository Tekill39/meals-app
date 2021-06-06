import React from 'react';
import {View, Text, StyleSheet, Flatlist} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';

const renderGridItem = (itemData) => {
    return( 
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>)
    }
const CategoriesScreen = props => {    
    
  return(
      <Flatlist
      keyExtractor = {(item, index)=>item.id}  
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2}/>
  );
};

 const styles = StyleSheet.create({
   gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;