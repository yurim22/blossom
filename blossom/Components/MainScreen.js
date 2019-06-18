import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View,TouchableHighlight, } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import ChatTab from './AppTabNavigator/ChatTab'
import SearchTab from './AppTabNavigator/SearchTab'

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: { screen: HomeTab },
  ChatTab: { screen: ChatTab },
  SearchTab: { screen: SearchTab },
  ProfileTab: { screen: ProfileTab }
}, {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    }
  });

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  onClickListener = (viewId) => {
    this.props.navigation.navigate(viewId);
  }
  
  static navigationOptions = {
    headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
    title: 'Blossom',
    headerRight: <TouchableHighlight onPress={() => this.onClickListener('msg')}>
      <Icon name='ios-send' style={{ paddingRight: 10 }} />
    </TouchableHighlight>
  }
  render() {
    return (
      <AppTabContainet />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
})

