import { StyleSheet, Text, View } from "react-native";
import React from "react";

const signIn = () => {
  return (
    <View>
      <Text style={styles.text}>sign-in</Text>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    margin: 20,
  },
});
