import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../HeaderButtons';
import Colors from '../../constant/Colors';

const FilterSwitch = props =>{
  return(
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch
    trackColor={{true:Colors.primaryColor}}
    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ' '} 
    value={props.state} 
    onValueChange={props.onChange}/>
  </View> )
}

const FilterScreen = props => {
  const [isGlutenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters =()=> {
    const appliedFilter = {
      glutenFree:isGlutenFree,
      lactoseFree:isLactoseFree,
      vegan:isVegan,
      isVegetarian:isVegetarian
    }
    console.log(appliedFilter)
  };

  useEffect(()=>{
    props.navigation.serParams({save:saveFilters});
  }, [saveFilters])

  return(
        <View style = {styles.screen}>
           <Text style={styles.title}> Available Filters  /  Restrictions  </Text> 
           <FilterSwitch 
             label='Glutten-free' 
             state={isGlutenFree} 
             onChange={newvalue => setIsGluttenFree(newvalue)}/>
           <FilterSwitch 
             label='Lactose-free' 
             state={isLactoseFree} 
             onChange={newvalue => setIsLactoseFree(newvalue)}/>
           <FilterSwitch 
             label='Vegan' 
             state={isVegan} 
             onChange={newvalue => setIsVegan(newvalue)}/>
            <FilterSwitch 
             label='Vegetarian' 
             state={isVegetarian} 
             onChange={newvalue => setIsVegetarian(newvalue)}/>
           <View style={styles.filterContainer}>           
           </View> 
        </View>);
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    filterContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'80%',
      marginVertical:15
    },
    title:{
      fontFamily:'open-sans-bold',
      fontSize:22,
      margin:20,
      textAlign:'center'
    }
});

FilterScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Filter Meals',
  headerLeft: (   
    <HeaderButtons  HeaderButtonComponent={HeaderButton}>
      <Item title="menu" iconName='ios-menu' 
        onPress={()=>{
        navData.navigation.toggleDrawer();
      }}></Item>
    </HeaderButtons> 
   ),
   headerRight:(   
    <HeaderButtons  HeaderButtonComponent={HeaderButton}>
      <Item title="Save" iconName='ios-save' 
        onPress={()=>{
        navData.navigation.getParam('save')
      }}></Item>
    </HeaderButtons> 
   )
  };
};
export default FilterScreen;