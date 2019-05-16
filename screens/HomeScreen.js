import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  Icon,
  TextInput,
  TouchableHighlight,
  Dimensions
} from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import Card from "../components/card";

// start of class1

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={Styles.container} scrollEventThrottle={16}>
        <View style={Styles.introText}>
          <Text style={Styles.text}>Hello User!</Text>
        </View>

        <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={Styles.headingText}>EDM</Text>
        </View>

        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-1"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-2"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-3"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-4"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-5"
            />
          </TouchableOpacity>
        </ScrollView>

        <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={Styles.headingText}>POP</Text>
        </View>

        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-1"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-2"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-3"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-4"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-5"
            />
          </TouchableOpacity>
        </ScrollView>

        <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={Styles.headingText}>OLD</Text>
        </View>

        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-1"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-2"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-3"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-4"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              image={require("../assets/images/Music-icon.png")}
              item="Item-5"
            />
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    );
  }
}

// end of class1

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#191414"
  },
  introText: {
    alignSelf: "center",
    padding: 10
  },
  text: {
    color: "#ffffff",
    paddingVertical: 20,
    borderBottomColor: "#282828",
    borderBottomWidth: 5
  },
  headingText: {
    color: "#ffffff",
    borderLeftColor: "#1db954",
    borderLeftWidth: 5,
    paddingHorizontal: 30,
    paddingVertical: 10
  }
});
