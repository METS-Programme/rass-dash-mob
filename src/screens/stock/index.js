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
  Badge,
  View,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";

import Status from "./status";
import { Dimensions,ScrollView } from "react-native";
import {
  BarChart,
} from 'react-native-chart-kit'

const data = {
  labels: ['Acholi', 'Bunyoro', 'Central 1', 'Central','East',' Kampala','Lango','Masaka','Rwenzori','Soroti','West Nile'],
  datasets: [{
    data: [
      0,
      0,0,0,
      1,
      4,
      0,1,7,1,1,
    ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
  }]
}
// in Expo - swipe left to see the following styling, or create your own
const chartConfigs =
{
  backgroundColor: '#000000',
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  // style: {
  //     borderRadius: 16                                     ---- removed for the bar graph not needed
  // }
}

const graphStyle = {
  marginVertical: 8,
  ...chartConfigs.style
}





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
    const width = Dimensions.get('window').width
        const height = 220
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Stock Status</Title>
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
            <Text>Adults</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Paediatrics</Text>
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
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 0 }}>
                <ScrollView>
                  <View flexDirection="row">
                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 10, alignSelf: 'center' }}>
                      <CardItem>
                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', fontSize: 10 }}>15 of 94 Health Facilities Stocked Out</Text>
                      </CardItem>
                    </Card>
                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 10, alignSelf: 'center' }}>
                      <CardItem >
                        <Text style={{ flex: 1, color: 'black', justifyContent: 'flex-start', fontSize: 10 }}>94 of 1074 Health Facilities Reported [Missing Reports]</Text>
                      </CardItem>
                    </Card>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{
                      flex: 1,
                      marginVertical: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      color: 'blue'
                    }}>Number Of Facilities Stocked Out Adults (2019W31)</Text>

                    {/* <BarChart
                      width={width - 2}
                      height={height}
                      data={data}
                      chartConfig={chartConfigs}
                      style={graphStyle}
                    /> */}

                  </View>
                </ScrollView>
              </View>
            </View>

          }

          {this.state.seg === 2 &&


            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 0 }}>
                <ScrollView>
                  <View flexDirection="row">
                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 10, alignSelf: 'center' }}>
                      <CardItem>
                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', fontSize: 10 }}>15 of 94 Health Facilities Stocked Out</Text>
                      </CardItem>
                    </Card>
                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 10, alignSelf: 'center' }}>
                      <CardItem >
                        <Text style={{ flex: 1, color: 'black', justifyContent: 'flex-start', fontSize: 10 }}>94 of 1074 Health Facilities Reported [Missing Reports]</Text>
                      </CardItem>
                    </Card>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{
                      flex: 1,
                      marginVertical: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      color: 'blue'
                    }}>Number Of Facilities Stocked Out Paediatrics (2019W31)</Text>



                  </View>
                </ScrollView>
              </View>
            </View>

          }
          {this.state.seg === 3 &&

            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 0 }}>
                <ScrollView>
                  <View flexDirection="row">
                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 10, alignSelf: 'center' }}>
                      <CardItem>
                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', fontSize: 10 }}>0 of 0 Health Facilities Stocked Out</Text>
                      </CardItem>
                    </Card>
                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 10, alignSelf: 'center' }}>
                      <CardItem >
                        <Text style={{ flex: 1, color: 'black', justifyContent: 'flex-start', fontSize: 10 }}>0 of 1083 Health Facilities Reported [Missing Reports]</Text>
                      </CardItem>
                    </Card>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{
                      flex: 1,
                      marginVertical: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      color: 'blue'
                    }}>Number Of Facilities Stocked Out RTKS (2019W31)</Text>



                  </View>
                </ScrollView>
              </View>
            </View>

          }
        </Content>

        {/* <Footer>
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
        </Footer> */}
      </Container>
    );
  }
}

export default Stock;
