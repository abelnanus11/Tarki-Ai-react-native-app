import { createStackNavigator } from '@react-navigation/stack';
import Home from './index'; // Adjust the import if necessary

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Add this line to hide the header
      />
      // ...other screens...
    </Stack.Navigator>
  );
}
