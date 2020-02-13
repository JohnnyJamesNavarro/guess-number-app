import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";

export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber)) {
      Alert.alert("Invalid Value!", "Please input a number.", [
        { text: "OK", style: "default", onPress: resetInputHandler }
      ]);
      return;
    }

    if (chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Value!",
        "The number has to be a value between 1 and 99.",
        [{ text: "OK", style: "default", onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setConfirmed(false);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={DefaultStyles.title}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <CustomButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </CustomButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={DefaultStyles.bodyText}>Select a Number</Text>

          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center" // Cross-axis
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    flex: 1,
    margin: 10
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 25,
    alignItems: "center"
  }
});
