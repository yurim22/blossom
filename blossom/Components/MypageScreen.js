import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Container, Button, Item, Picker, Icon, Form } from 'native-base'

export default class MypageScreen extends React.Component {

  onClickListener = (viewId) => {
    this.props.navigation.navigate(viewId);
  }
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      selected: undefined,
      selected2: undefined,
      selected3: undefined
    };
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value) {
    this.setState({
      selected3: value
    });
  }
  
  // signUp = async () => {
  //   const { username, password, email, phone_number } = this.state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 35, paddingBottom: 20 }}>세부정보</Text>
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
            <Text style={styles.formText}>나이</Text>
            <TextInput style={styles.formInput}
              placeholder='Age'
              onChangeText={val => this.onChangeText('age', val)} />
          </View>
          <View style={styles.formbox}>
            <Form>
              <Text style={styles.formText}>성별</Text>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your sex"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: 300 }}
                  placeholder="select your sex"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="여자" value="key0" />
                  <Picker.Item label="남자" value="key1" />
                </Picker>
              </Item>
            </Form>
          </View>
          <View style={styles.formbox}>
            <Text style={styles.formText}>직업</Text>
            <TextInput style={styles.formInput}
              placeholder='Job'
              autoCapitalize="none"
              onChangeText={val => this.onChangeText('job', val)} />
          </View>
          <View style={styles.formbox}>
            <Text style={styles.formText}>취미</Text>
            <TextInput style={styles.formInput}
              placeholder='Hobby'
              autoCapitalize="none"
              onChangeText={val => this.onChangeText('hobby', val)} />
          </View>
          <View style={styles.formbox}>
            <Form>
              <Text style={styles.formText}>성격</Text>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your character"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: 300 }}
                  placeholder="select your character"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="감정적인" value="key0" />
                  <Picker.Item label="이성적인" value="key1" />
                  <Picker.Item label="내향적인" value="key2" />
                  <Picker.Item label="외향적인" value="key4" />
                  <Picker.Item label="비관적인" value="key5" />
                  <Picker.Item label="충동적인" value="key6" />
                </Picker>
              </Item>
            </Form>
          </View>
          <View style={styles.formbox}>
            <Form>
              <Text style={styles.formText}>이상형</Text>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your type"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: 300 }}
                  placeholder="select your type"
                  selectedValue={this.state.selected3}
                  onValueChange={this.onValueChange3.bind(this)}
                >
                  <Picker.Item label="잘생긴" value="key0" />
                  <Picker.Item label="예쁜" value="key1" />
                  <Picker.Item label="지적인" value="key2" />
                  <Picker.Item label="부유한" value="key4" />
                  <Picker.Item label="몸매가 좋은" value="key5" />
                  <Picker.Item label="유머러스한" value="key6" />
                </Picker>
              </Item>
            </Form>
          </View>
          <Button block info style={{ marginBottom: 10 }}>
            <Text style={{ color: 'white' }}>SignUp</Text>
          </Button>
          <Button block info onPress={() => this.props.navigation.goBack()}>
            <Text style={{ color: 'white' }}>Cancel</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    height: '20%',
    justifyContent: 'center'
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
    height: '20%'
  }
})