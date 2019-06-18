import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import HomeScreen from '../screens/HomeScreen';

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-home' style={{ color: tintColor }} />
    )
  }
  render() {
    return (
      <View style={style.container}>
        <HomeScreen/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});



