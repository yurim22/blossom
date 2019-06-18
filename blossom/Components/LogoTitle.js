import React, { Component } from 'react';
import {Image} from 'react-native';

export default class LogoTitle extends Component{
  render(){
    return(
      <Image
        source={require('../assets/logo.png')}
        style={{ height: 40, width: 150 }}/>
    );
  }
}