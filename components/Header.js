import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";

import Colors from "../constants/colors";

export default function Header(props) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          android: styles.headerAndroid,
          ios: styles.headerIOS
        })
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
    /*
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0
    */
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
    fontSize: 20,
    fontFamily: "open-sans-bold"
  }
});
