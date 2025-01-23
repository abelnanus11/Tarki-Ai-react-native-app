import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "../../services/authService";
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert(error.message);
      } else {
        alert("Sign-up successful. Please log in.");
        router.push("/auth/sign-in");
      }
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
      alert("An error occurred while trying to sign up. Please try again later.");
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/story3.webp')}
      style={styles.container}
      imageStyle={styles.backgroundImage} // Add this line
    >
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <Button title="Sign In" onPress={() => router.push("/auth/sign-in")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  signUpButton: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#3b5998', // Change this color as needed
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  spacing: {
    height: 20, // Adjust the height as needed
  },
});
