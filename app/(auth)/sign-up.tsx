import { StyleSheet, Text, View } from "react-native";
import React from "react";

const signUp = () => {
  return (
    <View>
      <Text style={styles.text}>signUp</Text>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    margin: 20,
  },
});
