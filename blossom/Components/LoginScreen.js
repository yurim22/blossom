import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Facebook, Constants} from 'expo';
import { Icon } from 'native-base';
import LogoTitle from './LogoTitle';
import bgImage from '../assets/login.png'

import * as firebase from 'firebase';
import {firebaseConfig} from '../config';
firebase.initializeApp(firebaseConfig)

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo:{}}
    state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {if(user != null) {
      console.log(user)
    }})
  }
  signUpUser = (email,password) => {
    try{
      if (this.state.password.length<6){
        alert("Pleaseenter at least 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email,password) => {
    try{
      firebase.auth().SignInWithEmailAndPassword(email, password).then(function (user) {
        this.onClickListener('main')
      })
    }
    catch(error){
      console.log(error.toString())
    }
  }

  async loginwithFacebook(){
    const {type, token} = await Facebook.logInWithReadPermissonsAsync
    ('2329416610658494', {permissions: ['public_profile']})

    if(type =='success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }

  onClickListener = (viewId) => {
    this.props.navigation.navigate(viewId);
  }
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  }
  //   static navigationOptions = {
  //     title: <Image
  //       source={require('../assets/logo.png')}
  //       style={{ height: 40, width: 150 }} />
  //   }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <View>
            <Text><Text style={{ color: 'red' }}>사랑</Text>으로 <Text style={{ color: '#F48FB1' }}>꽃</Text>을 피워내다</Text>
            <Text style={styles.headText}>블라-썸</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon name={'ios-person'} size={28} style={styles.inputIcon} />
            <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })} />
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'ios-lock'} size={28} style={styles.inputIcon} />
            <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })} />
          </View>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('main')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} onPress={() => this.loginwithFacebook()}>
            <View style={styles.socialButtonContent}>
              <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF' }} />
              <Text style={styles.loginText}>Sign in with facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('signup')}>
            <Text>SignUp</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "white",
    margin: 20
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },

  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});