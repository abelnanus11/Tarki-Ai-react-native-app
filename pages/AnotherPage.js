import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AnotherPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Another Page Content</Text>
        {/* Add your page content here */}
      </View>
      {/* ...existing code... */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  // ...existing styles...
});
