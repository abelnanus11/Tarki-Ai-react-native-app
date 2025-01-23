import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StoryDisplay({ story }) {
  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{story}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  storyText: {
    fontSize: 16,
    color: "#333",
  },
});
