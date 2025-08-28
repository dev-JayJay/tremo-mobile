import React from "react";
import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";
import { ArrowDown, ArrowUp } from "lucide-react-native";

type CoinCardProps = {
  symbol: string;
  amount: number;
  price: number;
  change: string;
  value: string;
  image: ImageSourcePropType;
};
const CoinCard = ({
  image,
  symbol,
  amount,
  price,
  change,
  value,
}: CoinCardProps) => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.leftSide}>
        <Image source={image} resizeMode="cover"
        style={styles.image} />
        <View>
          <Text style={styles.symbol}>{symbol}</Text>
          <View style={styles.bottomLeftSide}>
            <Text style={styles.price}>{price}</Text>
            <Text
              style={{
                color: change.includes("-") ? "red" : "green",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              {change}
              {change.includes("-") ? (
                <ArrowDown
                  size={13}
                  color={`${change.includes("-") ? "red" : "green"}`}
                />
              ) : (
                <ArrowUp
                  size={13}
                  color={`${change.includes("-") ? "red" : "green"}`}
                />
              )}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.create({
  amount: {
    color: "#21005D",
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
    color: "#21005D",
    fontSize: 20,
    fontWeight: 500,
    paddingVertical: 4,
  },
  bottomLeftSide: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image:{
    width: 40,
    height: 40,
  },
  leftSide:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#1A1A1A",
    borderTopWidth: 2,
    paddingVertical: 10,
  },
});
