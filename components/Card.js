import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    // shadow properties only work on iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation only works on Android
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});
