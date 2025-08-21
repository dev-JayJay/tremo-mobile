import { Logo } from "@/components/shared";
import { Link, router, useRouter } from "expo-router";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const modalWidth = width * 1;

const SecondTab = () => {
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
        <View style={styles.dotContainer}>
          <View style={styles.firstDot}></View>
          <View style={styles.secondDot}></View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/sign-up")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Link href="/sign-in" style={styles.skip}>
          Login
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  secondDot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: "#E3E3E3",
  },
  firstDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#838383",
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  back: {
    position: "absolute",
    color: "white",
    marginTop: 16,
    paddingLeft: 10,
    zIndex: 88,
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
    alignItems: "center",
    justifyContent: "center",
    marginVertical: -10,
  },
  image: {
    alignSelf: "center",
    width: 270,
    height: 300,
    marginVertical: 15,
  },
});
