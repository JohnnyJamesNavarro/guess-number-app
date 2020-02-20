import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import DefaultStyles from "../constants/default-styles";
import Colors from "../constants/colors";
import CustomButton from "../components/CustomButton";

export default function GameOverScreen(props) {
  return (
    <ScrollView>
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

        <View style={styles.resultContainer}>
          <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.answer}</Text>.
          </Text>
        </View>

        <CustomButton onPress={props.startNewGameHandler}>
          NEW GAME
        </CustomButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 12 : 20
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary
  }
});
