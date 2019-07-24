import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const cardOne = require("../../../assets/swiper-1.png");
const cardTwo = require("../../../assets/swiper-2.png");

const cards = [
  {
    text: "Reporting rates",
    name: "One",
    image: cardOne
  },
  {
    text: "Stock out rates",
    name: "Two",
    image: cardTwo
  }
];

class TrendAnalysis extends Component {
  render() {
    return (
      
        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            dataSource={cards}
            looping={true}
            renderEmpty={() =>
              <View>
                <Text>Over</Text>
              </View>
              }
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>Last 8 Weeks</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                  
                </CardItem>
              </Card>}
          />
        </View>
      
    );
  }
}

export default TrendAnalysis;