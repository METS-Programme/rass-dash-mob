import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

//DrawerNavigator Links
import Stock from "./screens/stock";
import Demo from "./screens/demo/";
import Dashboard from "./screens/dash/";

//StackNavigator Links
import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import Status from "./screens/stock/status";
import Facility from "./screens/facility";
import Report from "./screens/facility/reports";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Stock: { screen: Stock },
    Demo: { screen: Demo },
    Dashboard: {screen: Dashboard}

  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Status: { screen: Status },
    Facility: { screen: Facility },
    Report: { screen: Report }
    //IconFooter: { screen: IconFooter },
    //IconText: { screen: IconText },
    //BadgeFooter: { screen: BadgeFooter },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
