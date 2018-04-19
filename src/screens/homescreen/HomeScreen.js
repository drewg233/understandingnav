import React, { Component } from 'react';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right
} from "native-base";

class HomeScreen extends Component {
    render() {
        return (
        	<Container>
        	  <Header>
        	    <Left>
        	      <Button
        	        transparent
        	        onPress={() => this.props.navigation.navigate("DrawerOpen")}
        	      >
        	        Hello
        	      </Button>
        	    </Left>
        	    <Body>
        	      <Title>HomeScreen</Title>
        	    </Body>
        	    <Right />
        	  </Header>
        	  <Content padder>
        	    <Button
        	      full
        	      rounded
        	      primary
        	      style={{ marginTop: 10 }}
        	      onPress={() => this.props.navigation.navigate("About")}
        	    >
        	      <Text>Go To About</Text>
        	    </Button>
        	  </Content>
        	</Container>
        );
    }
}

export default HomeScreen;
