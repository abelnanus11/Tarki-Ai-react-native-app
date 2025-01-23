import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import * as Speech from "expo-speech";

export default function AudioControls({ text }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    Speech.speak(text, {
      onDone: () => setIsPlaying(false),
      onStopped: () => setIsPlaying(false),
    });
    setIsPlaying(true);
  };

  const pauseSound = () => {
    Speech.stop();
    setIsPlaying(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isPlaying ? (
        <Button title="Pause" onPress={pauseSound} />
      ) : (
        <Button title="Play Story" onPress={playSound} /> // Changed placeholder text
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexGrow: 1,
  },
});
