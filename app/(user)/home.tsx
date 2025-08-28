import React from "react";
import Header from "@/components/header";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Copy,
  EyeOff,
  MoveDownLeft,
  MoveUpRight,
  Repeat,
} from "lucide-react-native";
import { homeCoins } from "@/constants/home";
import CoinCard from "@/components/coin-card";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0B0B0B" }}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.walletWrapper}>
          <View style={styles.topText}>
            <View style={styles.topTextValue}>
              <Text style={styles.text}>dc3efsjs67c....</Text>
              <Copy color={"#fff"} size={16} />
            </View>
            <View style={styles.topTextValue}>
              <Text style={styles.text}>Hide balance</Text>
              <EyeOff color={"#fff"} size={16} />
            </View>
          </View>
          <Text style={styles.balance}>$541.90</Text>
          <View style={styles.actionsWrapper}>
            <View>
              <View style={styles.action}>
                <MoveUpRight color={"#CDCDCD"} size={24} />
              </View>
              <Text style={styles.actionText}>Send</Text>
            </View>
            <View>
              <View style={styles.action}>
                <MoveDownLeft color={"#CDCDCD"} size={24} />
              </View>
              <Text style={styles.actionText}>Receive</Text>
            </View>
            <View>
              <View style={styles.action}>
                <Repeat color={"#CDCDCD"} size={24} />
              </View>
              <Text style={styles.actionText}>Swap</Text>
            </View>
          </View>
        </View>
        <View style={styles.coinSectionWrapper}>
          <Text style={styles.coinSectionHeader}>Watchlists</Text>

          {homeCoins.map((coin) => {
            return <CoinCard key={coin.symbol} {...coin} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  coinSectionHeader: {
    color: "#CDCDCD",
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 20,
  },
  coinSectionWrapper: {
    backgroundColor: "#16161680",
    width: "94%",
    marginHorizontal: "auto",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    marginVertical: 30,
  },
  actionText: {
    color: "#CDCDCD",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
  },
  action: {
    backgroundColor: "#3A3A3A66",
    padding: 20,
    marginVertical: 10,
    borderRadius: 50,
  },
  actionsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  balance: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 20,
    fontSize: 35,
    fontWeight: 500,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  topTextValue: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "auto",
    backgroundColor: "#1D1D1D",
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  topText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  walletWrapper: {
    backgroundColor: "#16161680",
    width: "94%",
    marginHorizontal: "auto",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
  },
});
