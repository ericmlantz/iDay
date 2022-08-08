//import libraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// create a component
const Icon = ({name, size=40, backgroundColor='#000', iconColor='#fff'}) => {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size/2,
      backgroundColor,
      iconColor,
      justifyContent: 'center',
      alignItems: 'center'}}>
      <MaterialCommunityIcons name={name} color={iconColor} backgroundColor={backgroundColor} size={size*.5}/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default Icon;
