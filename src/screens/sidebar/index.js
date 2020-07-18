import React, { Component } from "react";
import { Image} from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

//const drawerCover = require("../../../assets/drawer-cover.png");
const drawerCover = require("../../../assets/supply-chain-bg.jpg");
const drawerImage = require("../../../assets/moh-logo.png");
const datas = [
  {
    name: "Dashboard",
    route: "Dashboard",
    icon: "speedometer",
    bg: "#9F897C"
  },
  {
    name: "Stock Status",
    route: "Stock",
    icon: "keypad",
    bg: "#9F897C",
    //types: "3"
  },
   {
     name: "Reports",
     route: "NHTypography",
     icon: "paper",
     bg: "#48525D"
   }//,
  // {
  //   name: "Demos",
  //   route: "Demo",
  //   icon: "paper",
  //   bg: "#48525D"
  // }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          {/*<Image square style={styles.drawerImage} source={drawerImage} />*/}
         
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
