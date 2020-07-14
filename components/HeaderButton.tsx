import React from 'react'
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


const CustomHeaderButton: React.FC<HeaderButtonProps> = (props) => {
    return (
      <HeaderButton {...props} IconComponent={Ionicons} iconSize={22} color={Colors.accentColor} />
    );
}

export default CustomHeaderButton;