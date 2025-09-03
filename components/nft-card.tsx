import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Hexagon, ShieldCheck } from "lucide-react-native";

interface NftCardProps {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  amount: number;
}

const NftCard = ({ image, title, subTitle, amount }: NftCardProps) => {
  return (
    <View style={styles.nftCardWrapper}>
      <View>
        <Image source={image} resizeMode="cover" style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.bottomWrapper}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <View style={styles.amountWarpper}>
            <Text style={styles.amount}>${amount}</Text>
            <ShieldCheck size={14} color={"#fff"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NftCard;

const styles = StyleSheet.create({
  amount: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 500,
  },
  amountWarpper: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  subTitle: {
    color: "#CDCDCD",
    fontSize: 12,
    fontWeight: 400,
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  nftCardWrapper: {
    backgroundColor: "#353434ff",
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
});
