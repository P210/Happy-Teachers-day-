import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import HorizontalView from './components/HorizontalView'

export default class App extends React.Component{
  render(){
    return(
      <View style  = {StyleSheet.container}>
        <HorizontalView/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent: 'center'
  }
})