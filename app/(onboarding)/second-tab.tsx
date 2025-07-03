import { Logo } from "@/components/shared";
import { Link, router, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SecondTab = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111F2" }}>
      <View>
        <Text style={styles.back} onPress={() => router.back()}>
          Back
        </Text>
        <Logo />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/lock Group 290.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomModal}>
        <Text style={styles.modalHeading}>Your keys your crypto</Text>
        <Text style={styles.modalText}>
          Your keys are essential for accessing your cryptocurrency, so always
          keep them safe and secure.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/second-tab")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Link href="/second-tab" style={styles.skip}>
          skip
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    color: "white",
    marginTop: 16,
    paddingLeft: 10,
    zIndex: 88,
  },
  modalHeading: {
    paddingTop: 55,
    paddingBottom: 40,
    color: "white",
    textAlign: "center",
    fontSize: 26,
    fontWeight: 500,
  },
  modalText: {
    color: "#CCCCCC",
    textAlign: "center",
    fontSize: 19,
    fontWeight: 400,
    paddingLeft: 5,
    paddingRight: 5,
  },
  bottomModal: {
    paddingBottom: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#252525",
    width: "100%",
    height: "55%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
  },
});
