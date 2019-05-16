import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Screen1 from "../screens/test/screen1";
import Screen2 from "../screens/test/screen2";

const Screen1Stack = createStackNavigator({
  Screen1: Screen1
});

Screen1Stack.navigationOptions = {
  tabBarLabel: "Screen1",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const Screen2Stack = createStackNavigator({
  Screen2: Screen2
});

Screen2Stack.navigationOptions = {
  tabBarLabel: "Screen2",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  Screen1Stack,
  Screen2Stack
});
