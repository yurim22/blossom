import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import ChatScreen from '../screens/ChatScreen';

export default class CharTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-chatboxes' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <ChatScreen/>
    );
  }
}
