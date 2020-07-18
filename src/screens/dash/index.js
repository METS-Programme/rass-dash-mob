import React, { Component } from 'react'
import { View, Text, SafeAreaView} from 'react-native'

import Bar from './barchart'
import ReceivedStock from './receivedstock';
 
class Dashboard extends Component {

    constructor(props){
        super(props)
    }
 
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <ReceivedStock />
            </SafeAreaView>  
        )
    }
}

export default Dashboard