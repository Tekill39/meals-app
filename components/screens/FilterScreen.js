import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../HeaderButtons';

const FilterScreen = props => {
  return(
        <View style = {styles.screen}>
           <Text> The Filter Screen!</Text>  
        </View>);
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

FilterScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Filter Meals',
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
export default FilterScreen;