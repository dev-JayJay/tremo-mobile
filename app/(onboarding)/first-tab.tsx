import { Logo } from "@/components/shared";
import { Link, router } from "expo-router";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FirstTab = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111111F2' }}>
      <Logo />
      <Image
        source={require('../../assets/images/tremo coins Group.png')}
        // style={styles.image}
        resizeMode="cover"
      />
      {/* <Image
        source={require('../../assets/images/Groupcoin reflection.png')}
        style={styles.image}
        resizeMode="cover"
      /> */}
      <View style={styles.bottomModal}>
        <Text style={styles.modalHeading}>All your crypto in one place</Text>
        <Text style={styles.modalText}>
          Effortlessly oversee all your cryptocurrency holdings , and monitor
          market trends
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
export default FirstTab;

const styles = StyleSheet.create({
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
  image: {
    position: 'absolute',
    top: '30%',
  }
});
