import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultStyles from "../constants/default-styles";

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_960_720.jpg"
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={DefaultStyles.bodyText}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={DefaultStyles.bodyText}>Number was: {props.answer}</Text>
      <View style={styles.button}>
        <Button title="New Game" onPress={props.startNewGameHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingVertical: 8
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20
  }
});
