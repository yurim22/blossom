import React, { Component } from 'react';
import {
	Alert,
	ScrollView,Image
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left,Button, Icon, Right } from 'native-base';
import logo from '../../assets/logo.png'

export default class HomeScreen extends Component {

	render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
                <Body>
								<Text><Text style={{ color: 'red' }}>사랑</Text>으로 <Text style={{ color: '#F48FB1' }}>꽃</Text>을 피워내다</Text>	
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={logo} style={{height: 80, width: 300, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
