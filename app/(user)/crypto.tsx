import Header from "@/components/header";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Copy } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cryptoCoins } from "@/constants/home";
import CryptoCard from "@/components/crypto-card";
import NftCard from "@/components/nft-card";
import { nft_data } from "@/constants/nfts";

const Crypto = () => {
  const [tab, setTab] = useState(0);
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
          </View>
          <Text style={styles.balance}>$541.90</Text>
          <View style={styles.actionsWrapper}>
            <View>
              <View style={styles.action}>
                <Text style={styles.actionText}>Buy</Text>
              </View>
            </View>
            <View>
              <View style={styles.action}>
                <Text style={styles.actionText}>Swap</Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionTwoRapper}>
            <View style={styles.tabWrapper}>
              {["Crypto", "NFTs", "DeFi"].map((tab, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => {
                      setTab(index);
                    }}
                  >
                    <Text style={styles.tabName}>{tab}</Text>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
            {tab === 0 && (
              <View style={styles.firstTab}>
                {cryptoCoins.map((coin) => {
                  return <CryptoCard key={coin.symbol} {...coin} />;
                })}
              </View>
            )}
            {tab === 1 && (
              <View style={styles.nftContainer}>
                {nft_data.map((ntf) => {
                  return (
                    <View key={ntf.index} style={styles.nftItem}>
                      <NftCard {...ntf} />
                    </View>
                  );
                })}
              </View>
            )}
            {tab === 2 && (
              <View style={styles.firstTab}>
                {cryptoCoins.map((coin) => {
                  return <CryptoCard key={coin.symbol} {...coin} />;
                })}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Crypto;

const styles = StyleSheet.create({
  nftItem: {
    width: "48%",
  },
  nftContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "center",
    marginHorizontal: "auto",
    width: "93%",
    gap: 10,
  },
  firstTab: {
    paddingHorizontal: 20,
  },
  tabName: {
    color: "#CDCDCD",
    fontWeight: 500,
    fontSize: 16,
  },
  tabWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    borderBottomColor: "#1A1A1A",
    borderBottomWidth: 1,
    paddingVertical: 25,
    marginHorizontal: 20,
  },
  sectionTwoRapper: {
    marginTop: 25,
  },
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
    fontSize: 18,
    fontWeight: 500,
  },
  action: {
    backgroundColor: "#3A3A3A66",
    paddingVertical: 15,
    paddingHorizontal: 40,
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
    // paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
  },
});
