import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import Card from "../components/card";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Card
            image={require("../assets/images/Music-icon.png")}
            item="book"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
