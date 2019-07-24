import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Segment,
  List,
  ListItem,
  Badge
} from "native-base";
import styles from "./styles";

import Status from "./status";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      seg: 2,
      datas: [
        {
          route: "Status",
          text: "TLE",
          bg: "#000000",
          num: "1"
        },
        {
          route: "NHListItemSelected",
          text: "TLD",
          bg: "#000000",
          num: "10"
        },
        {
          route: "NHListDivider",
          text: "NVP",
          bg: "#000000",
          num: "100"
        },
        {
          route: "NHListDivider",
          text: "TLN",
          bg: "#000000",
          num: "1000"
        },
        {
          route: "NHListDivider",
          text: "DTG",
          bg: "#000000",
          num: "10000"
        }
      ]
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Commodities</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-home" />
            </Button>
          </Right>
        </Header>
        <Segment>
              <Button
                first
                active={this.state.seg === 1 ? true : false}
                onPress={() => this.setState({ seg: 1 })}
              >
                <Text>STKA</Text>
              </Button>
              <Button
                active={this.state.seg === 2 ? true : false}
                onPress={() => this.setState({ seg: 2 })}
              >
                <Text>STKC</Text>
              </Button>
              <Button
                last
                active={this.state.seg === 3 ? true : false}
                onPress={() => this.setState({ seg: 3 })}
              >
                <Text>RTKS</Text>
              </Button>
            </Segment>

        <Content padder >
          {this.state.seg === 1 && 
          <List
            dataArray={this.state.datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                {data.num &&
                <Right style={{ flex: 1 }}>
                    <Badge
                    
                    style={{
                        //borderRadius: 3,
                        //height: 25,
                        //width: 72,
                        //backgroundColor: data.bg,
                        backgroundColor: data.bg
                    }}
                    textStyle={{ color: "white" }}
                    >
                    <Text
                        style={styles.badgeText}
                    >{`${data.num} C`}</Text>
                    </Badge>
                </Right>}
              </ListItem>}
          />
          
          }
          {this.state.seg === 2 && <Text>STKC Selected</Text>}
          {this.state.seg === 3 && <Text>RTKS Selected</Text>}
        </Content>

        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Text>STKA</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Text>STKC</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Text>RTK</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Text>TB</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Stock;
