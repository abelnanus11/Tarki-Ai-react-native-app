import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Onboarding2() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Get started now!</Text>
      <Text>Sign up or log in to explore Tarik AI.</Text>
      <Button title="Sign Up / Log In" onPress={() => router.push("/auth/sign-in")} />
    </View>
  );
}
