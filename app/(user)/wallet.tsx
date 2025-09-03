import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wallet = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rgba(17, 17, 17, 0.95)" }}
    >
      <View>
        <Text style={styles.text}>No Wallet Screen Design</Text>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 500,
  },
});
