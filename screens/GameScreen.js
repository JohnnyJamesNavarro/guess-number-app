import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

import DefaultStyles from "../constants/default-styles";
import CustomButton from "../components/CustomButton";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);

      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextGuess);
    setRounds(currRounds => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponet's Guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </CustomButton>
        <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="white" />
        </CustomButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "80%"
  }
});
