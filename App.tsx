import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

export default function App() {
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState("");

  return (
    <View style={styles2.container}>
      <View style={styles3.container}>
        <View style={styles.container}>
          <Text style={textStyle.format}>#crushingit</Text>
          <SafeAreaView>
            <TextInput
              style={inputStyles.format}
              onChangeText={setText}
              value={text}
              placeholder="Check It Out, Input Some Text"
            />
            <TextInput
              style={inputStyles.format}
              onChangeText={setNumber}
              value={number}
              placeholder="Input A Number"
              keyboardType="numeric"
            />
          </SafeAreaView>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 20,
  },
});

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
});
const textStyle = StyleSheet.create({
  format: {
    color: "white",
    backgroundColor: "red",
    fontSize: 40,
  },
});

const inputStyles = StyleSheet.create({
  format: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
