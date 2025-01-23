import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/story6.webp')} // Changed to story4.webp
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.content}>
        <Text style={styles.header}>Welcome to Tarik AI</Text>
        <Text style={styles.description}>
          Unleash your creativity with AI-powered storytelling. Generate captivating stories tailored to your imagination!
        </Text>
        <Text style={styles.title}></Text>
        <TouchableOpacity onPress={() => router.push('/auth/sign-in')} style={styles.button}>
          <Text style={styles.buttonText}>Let's go Tarik</Text>
        </TouchableOpacity>
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
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#ff512f', // Add background color to button
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gold', // Changed to gold
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white', // Changed to white
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    blurRadius: 10, // Add this line to apply blur effect
  },
});
