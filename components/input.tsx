import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface InputProps {
  icon: string;
  placeholder: string;
  lable: string;
}

const SharedInput = ({
  icon,
  placeholder = "checking",
  lable = "checking",
}: InputProps) => {
  return (
    <View style={styles.InputLayoutContainer}>
      <Text style={styles.label}>{lable}</Text>
      <View style={styles.InputContainer}>
        <Image src="" alt="icon" />
        <TextInput placeholder={placeholder} placeholderTextColor={'#FFFFFF'} />
      </View>
    </View>
  );
};

export default SharedInput;

const styles = StyleSheet.create({
  label: {
    color: '#FFFFFF',
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 400,

  },
  InputContainer: {
    borderColor: "#4A4A4A",
    borderWidth: 1,
    backgroundColor: "#212121",
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  InputLayoutContainer: {
    width: "100%",
    height: "auto",
  },
});
