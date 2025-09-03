import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Logo } from "@/components/shared";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
      }}
    >
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.subtext}>to</Text>
      <View style={styles.logoWrapper}>
        <Logo />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/first-tab")}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    fontWeight: 600,
    color: "#fff",
  },
  subtext: {
    fontSize: 25,
    fontWeight: 600,
    color: "#fff",
  },
  btnText: {
    color: "#111",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
  },
  btn: {
    width: "60%",
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  logoWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
