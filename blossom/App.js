import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import MypageScreen from './Components/MypageScreen';
import MainScreen from './Components/MainScreen';
import MsgScreen from './Components/screens/msgScreen';

// import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyBfPG9s1NDnoVNYmdQP3AIx9ZCIfqUyq6Q",
//   authDomain: "blossom-1ba0e.firebaseapp.com",
//   databaseURL: "https://blossom-1ba0e.firebaseio.com",
//   storageBucket: "blossom-1ba0e.appspot.com",
// }
// firebase.initializeApp(firebaseConfig);

const AppStackNavigator = createStackNavigator(
  {
    login: LoginScreen,
    signup: SignupScreen,
    mypage: MypageScreen,
    main: MainScreen,
    msg: MsgScreen
  },
  {
    initialRouteName: 'login'
  }
);
// const AppStackNavigator = createStackNavigator({
//   Main: {
//     screen: LoginScreen
//   }
// });

export default createAppContainer(AppStackNavigator);