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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from "react-native-table-component";
import Status from "./status";
import { Dimensions, ScrollView } from "react-native";
import {
  BarChart,
} from 'react-native-chart-kit'

const data = {
  labels: ['Acholi', 'Bunyoro', 'Central 1', 'Central', 'East',' Kampala', 'Lango', 'Masaka', 'Rwenzori','Soroti', 'West Nile'],
  datasets: [{
    data: [

      0, 0, 0, 0, 10, 2, 1, 7, 1, 1,0,
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
// Table header items
const head = [
  "Commodity",
  "Category",
  "Under",
  "Adquate",
  "Over",
  "Stockouts",
  "Clients",
  "Clients at Rick"
];

// Table data rows
const data123 = [
  ["ADTDF/3TC/EFVBE", "Adults", "19", "10", "66", "3", "19478", "3320"],
  ["TDF/3TC/DTG", "Adults", "0", "36", "62", "0", "0", "0"],
  ["TDF/3TC", "Adults", "6", "14", "75", "3", "2564", "824"],
  ["RTV", "Adults", "0", "88", "10", "0", "0", "0"],
  ["RAL", "Adults", "0", "98", "0", "0", "0", "0"]
];

const graphStyle = {
  marginVertical: 8,
  ...chartConfigs.style
}

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {

      tableHead: ['Commodity', 'Category', 'Under', 'Adequate', 'Over', 'StockOuts', 'Client', 'Clients at risk'],
      tableData: [
        ["ADTDF/3TC/EFVBE", "Adults", "19", "10", "66", "3", "19478", "3320"],
        ["TDF/3TC/DTG", "Adults", "0", "36", "62", "0", "0", "0"],
        ["TDF/3TC", "Adults", "6", "14", "75", "3", "2564", "824"],
        ["RTV", "Adults", "0", "88", "10", "0", "0", "0"],
        ["RAL", "Adults", "0", "98", "0", "0", "0", "0"],
        ["NVP", "Adult", "6", "22", "69", "1", "1766", "673"],
        ["LPV/r", "Adult", "8", "20", "68", "2", "395", "34"],
        ["ETV", "Adult", "0", "97", "1", "0", "0", "0"],
        ["EFV", "Adult", "1", "14", "82", "1", "1449", "56"],
        ["DTG", "Adult", "0", "68", "30", "0", "0", "0"]

      ],
      widthArr: [200, 80, 40, 80, 40, 160, 50, 150],

      table2Header: ["Report", "Level of Care", "Total", "GOVT", "PNFP", "PFP", "NGO"],
      table2Data: [
        ["STKA", "Clinic", "5", "1", "3", "1", "0"],
        ["STKA", "General Hospital", "13", "4", "8", "0", "1"],
        ["STKA", "HC II", "10", "9", "1", "0", "0"],
        ["STKA", "HC III", "58", "46", "7", "2", "3"],
        ["STKA", "HC IV", "10", "7", "2", "1", "0"],
        ["STKA", "NR Hospital", "1", "1", "0", "0", "0"],
        ["STKA", " ", "1", "0", "0", "0", "0"],
      ],
      widthArr2: [80, 200, 40, 80, 40, 60, 50],
      tableDataPaed: [
        ["LPV/r 100/25mg", "Paediatric", "9", "211", "265", "30", "502", "252"],
        ["AZT/3TC/NVP", "Paediatric", "14", "129", "342", "30", "1858", "539"],
        ["AZT/3TC 60/30mg", "Paediatric", "5", "255", "226", "29", "433", "191"],
        ["EFV 200mg", "Paediatric", "35", "129", "325", "26", "1295", "404"],
        ["ABC/3TC 120/60mg", "Paediatric", "18", "109", "368", "20", "1868", "284"],
        ["NVP 50mg", "Paediatric", "9", "141", "346", "19", "504", "104"],
        ["NVP 10mg / ml(240ml)", "Paediatric", "0", "491", "24", "0", "0", "0"],
        ["NVP 10mg / ml(100ml)", "Paediatric", "0", "186", "329", "0", "0", "0"],
        ["EFV 50mg", "Paediatric", "0", "504", "11", "0", "0", "0"],
        ["ABC 60mg", "Paediatric", "0", "506", "9", "0", "0", "0"]
      ],


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

                    {<BarChart
                      width={width - 2}
                      height={height}
                      data={data}
                      chartConfig={chartConfigs}
                      style={graphStyle}
                    />}

                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{
                      flex: 1,
                      marginVertical: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      color: 'blue'
                    }}>Stock Status [HIV Commodities] - Number Of Facilities</Text>

                    <>
                      <ScrollView horizontal={true}>
                        <View style={{ flex: 1, padding: 5, paddingTop: 0, backgroundColor: '#fff' }}>
                          <Table style={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
                            <Row
                              data={this.state.tableHead}
                              widthArr={this.state.widthArr}
                              style={{ flex: 1, height: 25, backgroundColor: '#f1f8ff', justifyContent: 'center' }} />

                            <Rows
                              data={this.state.tableData}
                              widthArr={this.state.widthArr} />
                          </Table>
                        </View>
                      </ScrollView>
                    </>
                  </View>


                  <View style={{ flex: 1 }}>
                    <Text style={{
                      flex: 1,
                      marginVertical: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      color: 'blue'
                    }}>Org Unit Summary [Reports]</Text>

                    <>
                      <ScrollView horizontal={true}>
                        <View style={{ flex: 1, padding: 5, paddingTop: 0, backgroundColor: '#fff' }}>
                          <Table style={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
                            <Row
                              data={this.state.table2Header}
                              widthArr={this.state.widthArr2}
                              style={{ flex: 1, height: 25, backgroundColor: '#f1f8ff', justifyContent: 'center', color: 'black' }} />

                            <Rows
                              data={this.state.table2Data}
                              widthArr={this.state.widthArr2} />
                          </Table>
                        </View>
                      </ScrollView>
                    </>
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

                    <View flexDirection="row">
                      <ScrollView horizontal={true}>
                        {<BarChart
                          flexDirection = 'row'
                          width={width}
                          height={height}
                          data={data}
                          chartConfig={chartConfigs}
                          style={graphStyle}
                        />}
                      </ScrollView>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{
                      flex: 1,
                      marginVertical: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      color: 'blue'
                    }}>Stock Status [HIV Commodities] - Number Of Facilities</Text>

                    <>
                      <ScrollView horizontal={true}>
                        <View style={{ flex: 1, padding: 5, paddingTop: 0, backgroundColor: '#fff' }}>
                          <Table style={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
                            <Row
                              data={this.state.tableHead}
                              widthArr={this.state.widthArr}
                              style={{ flex: 1, height: 25, backgroundColor: '#f1f8ff', justifyContent: 'center' }} />

                            <Rows
                              data={this.state.tableDataPaed}
                              widthArr={this.state.widthArr} />
                          </Table>
                        </View>
                      </ScrollView>
                    </>
                  </View>


                  <View style={{ flex: 1 }}></View>
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
      </Container>
    );
  }
}

export default Stock;






