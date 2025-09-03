import React, { useState } from "react";
import { Logo } from "@/components/shared";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedInput from "@/components/input";

const { width } = Dimensions.get("window");
const modalWidth = width * 1;

const signUp = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rgba(17, 17, 17, 0.95)" }}
    >
      <View style={showModal ? { opacity: 1 } : { opacity: 0 }}>
        <Text style={styles.back} onPress={() => router.back()}>
          Back
        </Text>
        <Logo />
      </View>
      <View style={showModal ? styles.showModalBg : styles.containerLayout}>
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
          <Pressable onPress={() => setShowModal(true)} style={styles.loginBtn}>
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
      {showModal && (
        <View style={styles.bottomModal}>
          <Text style={styles.modalHeading}>Authentication code sent !</Text>
          <Text style={styles.modalText}>
            An authentication code has been sent to your email address
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(auth)/verify-otp")}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
          <Link href="/second-tab" style={styles.skip}>
            Change email
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
};

export default signUp;

const styles = StyleSheet.create({
  showModalBg: {
    opacity: 0.1,
    zIndex: 10,
    backgroundColor: "#191818ff",
  },
  button: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "white",
    margin: "auto",
    borderRadius: 15,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "#303030",
  },
  skip: {
    color: "#EAEAEA",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    padding: 0,
    margin: 0,
    paddingBottom: 0,
  },
  secondDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#838383",
  },
  firstDot: {
    width: 14,
    height: 14,
    borderRadius: 50,
    backgroundColor: "#E3E3E3",
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  modalHeading: {
    paddingTop: 55,
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 600,
  },
  modalText: {
    color: "#CCCCCC",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 400,
    paddingVertical: 10,
  },
  bottomModal: {
    zIndex: 50,
    backgroundColor: "#252525",
    width: modalWidth,
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: -modalWidth / 2 }],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    gap: 12,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
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
