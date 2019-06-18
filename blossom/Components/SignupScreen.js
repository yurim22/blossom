import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet, 
} from 'react-native';
import {Button} from 'native-base'

export default class SignUpScreen extends Component {
  state = {
    username: '', password: '', email: ''
  }
  onClickListener = (viewId) => {
    this.props.navigation.navigate(viewId);
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { email, paddword, username } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 35, paddingBottom: 20 }}>회원가입</Text>
          <View style={{ width: "100%", borderBottomWidth: 0.5, borderColor: '#444' }} />
        </View>
        <View style={styles.content}>
          <View style={styles.formbox}>
            <Text style={styles.formText}>Email</Text>
            <TextInput style={styles.formInput}
              placeholder='Email'
              autoCapitalize="none"
              onChangeText={val => this.onChangeText('email', val)} />
          </View>
          <View style={styles.formbox}>
            <Text style={styles.formText}>Password</Text>
            <TextInput style={styles.formInput}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={val => this.onChangeText('password', val)} />
          </View>
          <View style={styles.formbox}>
            <Text style={styles.formText}>Username</Text>
            <TextInput style={styles.formInput}
              placeholder='Username'
              autoCapitalize="none"
              onChangeText={val => this.onChangeText('username', val)} />
          </View>
          <Button block info style={{marginBottom:10}} onPress={() => this.onClickListener('mypage')}>
            <Text style={{color:'white'}}>SignUp</Text>
          </Button>
          <Button block info onPress={() => this.props.navigation.goBack()}>
            <Text style={{color:'white'}}>Cancel</Text>
          </Button>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width:'100%',
    height: '20%',
    justifyContent:'center'
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  formbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10
  },
  formText: {
    fontSize: 15,
  },
  formInput: {
    borderColor: '#aaa', width: '70%',
    height: 35, borderWidth: 1, borderRadius: 14, padding: 5
  },
  footer: {
    width: '100%',
    height:'20%'
  }
})