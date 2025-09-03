import { Logo } from "@/components/shared";
import { Link, router } from "expo-router";
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

const FirstTab = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rgba(17, 17, 17, 0.95)" }}
    >
      <Logo />
      <Image
        source={require("../../assets/images/tremo coins Group.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.bottomModal}>
        <Text style={styles.modalHeading}>All your crypto in one place</Text>
        <Text style={styles.modalText}>
          Effortlessly oversee all your cryptocurrency holdings , and monitor
          market trends
        </Text>
        <View style={styles.dotContainer}>
          <View style={styles.firstDot}></View>
          <View style={styles.secondDot}></View>
        </View>
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
export default FirstTab;

const styles = StyleSheet.create({
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
    alignItems: "center",
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
  image: {
    width: "100%",
    height: 200,
    marginTop: 40,
    marginBottom: 20,
  },
});
