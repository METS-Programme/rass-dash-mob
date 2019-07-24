import React, { Component } from "react";
//import { View } from "react-native";
import TrendAnalysis from './trend'

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Accordion,
  Text,
  View
} from "native-base";

const dataArray = [
  {
    title: "2019W12",
    content:
      "Report for 2019W12"
  },
  {
    title: "2019W11",
    content:
      "Report for 2019W11"
  },
  {
    title: "2019W10",
    content:  "Report for 2019W1"
  },
  {
    title: "2019W9",
    content:
      "Report for 2019W3"
  },
  {
    title: "2019W28",
    content:
      "Report for 2019W2"
  },
  {
    title: "2019W7",
    content:  "Report for 2019W1"
  },
  {
    title: "2019W6",
    content:
      "Report for 2019W3"
  },
  {
    title: "2019W5",
    content:
      "Report for 2019W2"
  },
  {
    title: "2019W4",
    content:  "Report for 2019W1"
  },
  {
    title: "2019W3",
    content:
      "Report for 2019W3"
  },
  {
    title: "2019W2",
    content:
      "Report for 2019W2"
  },
  {
    title: "2019W1",
    content:  "Report for 2019W1"
  }
];

class Report extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Reports</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion dataArray={dataArray} animation={false} expanded={-1} />

          

        </Content>
      </Container>
    );
  }
}

export default Report;
