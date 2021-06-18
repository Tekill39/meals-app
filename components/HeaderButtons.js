import React from 'react';
import {} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import COLOR from '../constant/Colors';
import { Platform } from 'react-native';



const CustomHeaderButton = props => {
    return (
        <HeaderButton {...props} 
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}/>
    );
}

export default CustomHeaderButton;


