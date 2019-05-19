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
        <Text style={styles.itemText}>{this.props.item}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 100,
    padding: 5,
    margin: 10,
    borderRadius: 3,
    shadowColor: "#ffffff",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: "#282828",
    elevation: 3,
    shadowOffset: { width: 3, height: 3 },
    alignContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginBottom: 5
  },
  itemText: {
    color: "#dddddd"
  }
});
