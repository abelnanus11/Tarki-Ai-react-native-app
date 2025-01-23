import React, { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { generateStory } from "../../services/cohereApi";
import StoryDisplay from "../../components/StoryDisplay";
import AudioControls from "../../components/AudioControls";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [topic, setTopic] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Your New Title', // Change this to the desired title
      headerShown: false, // Set to false to hide the header
    });
  }, [navigation]);

  const handleGenerateStory = async () => {
    setLoading(true);
    const generatedStory = await generateStory(topic);
    setStory(generatedStory);
    setLoading(false);
  };

  return (
    <ImageBackground
      source={require('../../assets/story4.webp')} // Changed to story4.webp
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Tarik Ai</Text>
          <Text style={styles.description}>Create amazing stories with AI</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a story topic"
            placeholderTextColor="#ccc"
            onChangeText={setTopic}
            value={topic}
          />
          <TouchableOpacity style={styles.button} onPress={handleGenerateStory} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Generate Story</Text>
            )}
          </TouchableOpacity>
          {story && (
            <>
              <AudioControls text={story} />
              <StoryDisplay story={story} />
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#ff7e5f', // Add background color to button
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    blurRadius: 10, // Add this line to apply blur effect
  },
});
