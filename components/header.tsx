import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ChevronDown, ScanLine, Wallet } from "lucide-react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/images/captin image.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.walletContainer}>
        <Text style={styles.walletText}>Wallet 1</Text>
        <ChevronDown color={"#fff"} />
      </View>
      <ScanLine color={"#fff"} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  walletText: {
    color: "#fff",
  },
  walletContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    backgroundColor: "#1D1D1D",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  image: {
    width: 50,
    height: 50,
  },
});
