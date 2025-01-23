import * as Speech from "expo-speech";

export const speakText = (text) => {
  Speech.speak(text, { pitch: 1, rate: 1 });
};

export const stopSpeaking = () => {
  Speech.stop();
};
