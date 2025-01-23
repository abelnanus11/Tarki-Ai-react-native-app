import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ placeholder, value, onChangeText, style }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginVertical: 8,
  },
});
