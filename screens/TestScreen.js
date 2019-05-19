import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import HomeScreenNavigator from "../navigation/HomeScreenNavigator";

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: "TEST"
  };
  render() {
    return (
      <View>
        <ScrollView>
          <Text>Test Screen</Text>
        </ScrollView>
        <HomeScreenNavigator />
      </View>
    );
  }
}
