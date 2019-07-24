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

const data = {
    labels: ['2019W1', '2019W2', '2019W3', '2019W4', '2019W5'],
    datasets: [{
      data: [
        50,
        20,
        2,
        86,
        100
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
    style: {
      borderRadius: 16
    }
  }

  const graphStyle = {
    marginVertical: 8,
    ...chartConfigs.style
  }


export default class Bar extends React.Component {
  renderTabBar() {
    return <StatusBar hidden/>
  }
  render() {
    //const width = Dimensions.get('window').width
    const height = 220
    const width =  600
    return (
              
          <View style={{flex: 1}}>
            
            <View 
              style={{flex:1, backgroundColor:'grey', paddingLeft:10, paddingRight:10, paddingTop:50}}
            >
            <ScrollView horizontal={true}>
              <BarChart
                width={width - 20}
                height={height}
                data={data}
                chartConfig={chartConfigs}
                style={graphStyle}
              />
              <BarChart
                width={width - 20}
                height={height}
                data={data}
                chartConfig={chartConfigs}
                style={graphStyle}
              />
            </ScrollView>
            </View>
          </View>
    )
  }
}