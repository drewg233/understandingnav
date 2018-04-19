import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Title,
  Button,
  H1
} from "native-base";

import { StackNavigator, NavigationActions } from "react-navigation";

export default class Profile extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text>Show User profiles here</Text>
              <Right>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack(null) }>
          	<Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};