import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { generateStory } from "../../services/cohereApi";
import StoryDisplay from "../../components/StoryDisplay";
import AudioControls from "../../components/AudioControls";
import * as Speech from 'expo-speech'; // Import expo-speech

export default function Home() {
  const [topic, setTopic] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateStory = async () => {
    setLoading(true);
    const generatedStory = await generateStory(topic);
    setStory(generatedStory);
    Speech.speak(generatedStory); // Use expo-speech to play the generated story
    setLoading(false);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Generate a Story</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a story topic"
            placeholderTextColor="#ccc"
            onChangeText={setTopic}
            value={topic}
          />
          <TouchableOpacity style={styles.button} onPress={handleGenerateStory} disabled={loading}>
            <LinearGradient
              colors={['#ff7e5f', '#feb47b']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonBackground}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>Generate Story</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
          {story && (
            <>
              <AudioControls text={story} />
              <StoryDisplay story={story} />
            </>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
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
  },
  buttonBackground: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
