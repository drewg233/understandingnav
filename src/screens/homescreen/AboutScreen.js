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

class AboutScreen extends Component {
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
        	      <Title>AboutScreen</Title>
        	    </Body>
        	    <Right />
        	  </Header>
        	  <Content padder>

        	    <Button
        	      full
        	      rounded
        	      dark
        	      style={{ marginTop: 10 }}
        	      onPress={() => this.props.navigation.navigate("Profile")}
        	    >
        	      <Text>Go To Profile</Text>
        	    </Button>

        	  </Content>
        	</Container>
        );
    }
}

export default AboutScreen;
