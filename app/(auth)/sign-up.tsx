import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const signUp = () => {
  return (
    <View>
      <Text style={styles.text}>signUp</Text>
      <Link href={"/(auth)/sign-in"} style={styles.text}>
        Go to Sign In
      </Link>
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
