import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

type CryptoCardProps = {
  symbol: string;
  amount: string;
  price: string;
  image: ImageSourcePropType;
};
const CryptoCard = ({ image, symbol, amount, price }: CryptoCardProps) => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.leftSide}>
        <Image source={image} resizeMode="cover" style={styles.image} />
        <View>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.amount}>${amount}</Text>
        <Text style={styles.value}>{price}</Text>
      </View>
    </View>
  );
};

export default CryptoCard;

const styles = StyleSheet.create({
  amount: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 500,
    paddingVertical: 4,
  },
  value: {
    color: "#CDCDCD",
    fontSize: 13,
    fontWeight: 500,
  },
  rightSide: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  price: {
    color: "#CDCDCD",
    fontSize: 13,
    fontWeight: 500,
  },
  symbol: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 500,
    paddingVertical: 4,
  },
  bottomLeftSide: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#1A1A1A",
    borderTopWidth: 2,
    paddingVertical: 14,
  },
});
