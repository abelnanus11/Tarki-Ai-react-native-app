import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Tarik AI</Text>
      <Text>Discover amazing stories generated just for you.</Text>
      <Button title="Next" onPress={() => router.push("/onboarding/second")} />
    </View>
  );
}
