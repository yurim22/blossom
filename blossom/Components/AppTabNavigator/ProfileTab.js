import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import person2 from '../../assets/alien.png';

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={person2} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Seo Yurim</Text>
            <Text style={styles.info}>Student</Text>
            <Text style={styles.description}>안녕하세요 서유림입니다.</Text>

          
          </View>
        </View>
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


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#EF9A9A",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    
    fontWeight: "600"
  },
  info:{
    fontSize:16,

    marginTop:10
  },
  description:{
    fontSize:16,

    marginTop:10,
    textAlign: 'center'
  },
});
