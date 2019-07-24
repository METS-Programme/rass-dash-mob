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
  List,
  ListItem,
  Subtitle,
  Badge
} from "native-base";

import styles from "./styles";

const datas = [
        {
            route: "Facility",
            text: "Under",
            bg: "#9F897C",
            num: "3"
        },
        {
            route: "Status2",
            text: "Adequate",
            bg: "#9F897C",
            num: "3"
        },
        {
            route: "Status3",
            text: "Over",
            bg: "#9F897C",
            num: "3"
        },
        {
            route: "Status4",
            text: "Stock out",
            bg: "#9F897C",
            num: "3000"
        }
  ];

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
        <Container style={styles.container}>

            <Header>
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Stock Status</Title>
                <Subtitle>Number of facilities</Subtitle>
            </Body>
            <Right />
            </Header>

            <Content>
            <List
                dataArray={datas}
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
                        >{`${data.num} F`}</Text>
                        </Badge>
                    </Right>}
                </ListItem>}
            />
            </Content>

      </Container>
    );
  }
}

export default Status;
