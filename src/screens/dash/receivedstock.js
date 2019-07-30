import React from 'react'
import {
    ScrollView,
    StatusBar,
    Dimensions,
    Text,
    View,
    SafeAreaView
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
    BarChart,
} from 'react-native-chart-kit'

import 'babel-polyfill'
import { Card, CardItem, Header, H1, CardSwiper, CardSection, Container, Left, Icon, Right, Button, Title, Body, Drawer } from 'native-base';

  


const data = {
    labels: ['Adult 1st', 'Paed 1st', 'paed 2rd', 'Adult 2rd', ''],
    datasets: [{
        data: [
            40620,
            50567,
            150567,
            50567,
            0
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

// card grid view code here for styling
const styles = {
    mainContainer: {
        flex: 1,
        flexwrap: 'wrap',
        flexDirection: 'row'
    },
    containerStyle: {
        padding: 5,
        //backgroundColor: 'white',
        backgroundColor: 'red',
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        borderColor: '#6363DF',
        //elevation: 15

    }
}


export default class ReceivedStock extends React.Component {

    renderTabBar() {
        return <StatusBar hidden />
    }
    render() {
        const width = Dimensions.get('window').width
        const height = 220
        return (
            <Container style={styles.container}>
                <Header>
                    
                    <Body>
                        <Title style={{justifyContent:'center'}}>Received Stock</Title>
                    </Body>
                </Header>

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>

                        <ScrollView >
                            <Text style={{
                                flex: 1,
                                marginVertical: 10,
                                textAlign: 'center',
                                fontSize: 16,
                                color: 'blue'
                            }}>Quantity of ARVs received by Sites</Text>
                            <View flexDirection="row">
                                <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                    <CardItem >
                                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Adults 1st Line Regimen (50,567)</Text>
                                    </CardItem>
                                </Card>

                                <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                    <CardItem >
                                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Adults 2nd Line Regimen (150,567)</Text>
                                    </CardItem>
                                </Card>

                            </View>

                            <View flexDirection="row">
                                <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                    <CardItem >
                                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Paed 1st Line Regimen (40,620)</Text>
                                    </CardItem>
                                </Card>

                                <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                    <CardItem >
                                        <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Paed 2nd Line Regimen (50,567)</Text>
                                    </CardItem>
                                </Card>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{
                                    flex: 1,
                                    marginVertical: 10,
                                    textAlign: 'center',
                                    fontSize: 16,
                                    color: 'blue'
                                }}>Stock Recieved Vs Stock Ordered</Text>

                                <BarChart
                                    width={width - 2}
                                    height={height}
                                    data={data}
                                    chartConfig={chartConfigs}
                                    style={graphStyle}
                                />

                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{
                                    flex: 1,
                                    marginVertical: 10,
                                    textAlign: 'center',
                                    fontSize: 16,
                                    color: 'blue'
                                }}>Statistics - Uganda (2018W29) Total Received Stock Per Region</Text>
                                <View flexDirection="row">
                                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                        <CardItem >
                                            <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Rwenzori Region(5,407)</Text>
                                        </CardItem>
                                    </Card>

                                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                        <CardItem >
                                            <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>West Nile Region (78,464)</Text>
                                        </CardItem>
                                    </Card>
                                </View>

                                <View flexDirection="row">
                                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                        <CardItem >
                                            <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Central Region (80,560)</Text>
                                        </CardItem>
                                    </Card>
                                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                        <CardItem >
                                            <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Masaka Region(359)</Text>
                                        </CardItem>
                                    </Card>
                                </View>

                                <View flexDirection="row">

                                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                        <CardItem >
                                            <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Bunyoro Region (59)</Text>
                                        </CardItem>
                                    </Card>

                                    <Card style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                        <CardItem >
                                            <Text style={{ flex: 1, color: 'black', justifyContent: 'center', }}>Kampala Region (59)</Text>
                                        </CardItem>
                                    </Card> 
                                </View>

                            </View>



                        </ScrollView>
                    </View>
                </View>



            </Container>
        )
    }
}