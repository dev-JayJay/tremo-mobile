import React from "react";
import { Logo } from "@/components/shared";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedInput from "@/components/input";

const signUp = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rgba(17, 17, 17, 0.95)" }}
    >
      <View>
        <Text style={styles.back} onPress={() => router.back()}>
          Back
        </Text>
        <Logo />
      </View>
      <View style={styles.containerLayout}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Sign up ! </Text>
          <Text style={styles.subHeading}>
            Create an account to get started
          </Text>
        </View>
        <View style={styles.formContainer}>
          <SharedInput
            icon=""
            lable="Email Address"
            placeholder="rajitoheebishola4@gmail.com"
          />
          <SharedInput
            icon=""
            lable="Create password"
            placeholder="* * * * * * "
          />
          <SharedInput
            icon=""
            lable="Re-enter password"
            placeholder="* * * * * * "
          />
          <Pressable
            onPress={() => console.log("pressed")}
            style={styles.loginBtn}
          >
            <Text style={styles.btnText}>Register</Text>
          </Pressable>
          <Text style={styles.redirect}>
            Already have an account?{" "}
            <Link href={"/(auth)/sign-in"} style={styles.redirectIndicator}>
              Sign In
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signUp;

const styles = StyleSheet.create({
  redirectIndicator: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 700,
  },
  redirect: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#303030",
    fontSize: 18,
    fontWeight: 600,
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  formContainer: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 400,
    color: "#FFFFFF",
  },
  heading: {
    fontSize: 26,
    fontWeight: 500,
    color: "#FFFFFF",
  },
  textContainer: {
    width: "90%",
    margin: "auto",
  },
  containerLayout: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 30,
    marginVertical: 30,
  },
  back: {
    position: "absolute",
    color: "white",
    marginTop: 16,
    paddingLeft: 10,
    zIndex: 88,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    margin: 20,
  },
});
