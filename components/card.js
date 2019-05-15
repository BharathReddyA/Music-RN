import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Card extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.card}>
        <Image source={this.props.image} style={styles.welcomeImage} />
        <Text>{this.props.item}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    padding: 5,
    margin: 10,
    borderRadius: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowOffset: { width: 3, height: 3 }
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  }
});
