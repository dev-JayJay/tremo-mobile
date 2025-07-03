import { View, Text, StyleSheet } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.logo}>Tremo</Text>
      <View style={styles.strock}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  logo: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    fontWeight: 600,
  },
  strock: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "#111111F2",
    top: 29,
  },
});
