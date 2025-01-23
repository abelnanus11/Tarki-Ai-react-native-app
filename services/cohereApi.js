import axios from "axios";

const API_KEY = "aVxRL4yK9fXrzMZC88M6tu2YY7ameyZUwRUTTLfa";
const COHERE_API_URL = "https://api.cohere.ai/v1/generate";

export const generateStory = async (topic) => {
  try {
    const response = await axios.post(
      COHERE_API_URL,
      {
        model: "command-xlarge",
        prompt: `Write an engaging story about: ${topic}`,
        max_tokens: 500,
      },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
    return response.data.generations[0].text;
  } catch (error) {
    console.error("Error generating story:", error);
    return "An error occurred while generating the story.";
  }
};
