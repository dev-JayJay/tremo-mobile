import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "@/components/shared";
import { OtpInput } from "react-native-otp-entry";

const { width } = Dimensions.get("window");
const modalWidth = width * 1;

const VerifyOtp = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
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
      <View style={showModal ? styles.showModalBg : styles.containerLayout}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Authentication</Text>
          <Text style={styles.subHeading}>
            Enter the 6-digits code sent to your email to verify.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <OtpInput
            numberOfDigits={6}
            focusColor={"#fff"}
            onTextChange={(value: string) =>
              console.log("this are the input entered", value)
            }
            theme={{
              pinCodeTextStyle: {
                color: "#fff",
              },
            }}
            type="numeric"
          />
          <Pressable
            onPress={() => setShowModal((prev) => !prev)}
            style={styles.loginBtn}
          >
            <Text style={styles.btnText}>Verify email</Text>
          </Pressable>
        </View>
      </View>
      {showModal && (
        <View style={styles.bottomModal}>
          <Text style={styles.modalHeading}>Success !</Text>
          <Text style={styles.modalText}>
            Your email has been verified successfully.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <Text style={styles.buttonText}>Proceed to login</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default VerifyOtp;

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
  // skip: {
  //   color: "#EAEAEA",
  //   fontSize: 18,
  //   fontWeight: 600,
  //   textAlign: "center",
  //   padding: 0,
  //   margin: 0,
  //   paddingBottom: 0,
  // },
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
});
