import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const signIn = () => {
  return (
    <View>
      <Text style={styles.text}>sign-in</Text>
      <Link href={"/(auth)/sign-up"} style={styles.text}>
        Go to Sign In
      </Link>
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
