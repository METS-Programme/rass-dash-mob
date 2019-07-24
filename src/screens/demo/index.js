import React, { Component } from 'react'
import { View } from 'react-native'

import ModalExample from './modal'
import Charts from './chart'
 
class Demo extends Component {

    constructor(props){
        super(props)
    }
 
    render () {
        return (
            
                <Charts />
        )
    }
}

export default Demo