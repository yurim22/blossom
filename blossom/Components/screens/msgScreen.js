import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight, } from 'react-native';
import { Icon } from 'native-base';

export default class MsgScreen extends Component {

  render() {
    return (
      <View style={style.container}>
        <Text>받은 쪽지가 없습니다.</Text>
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