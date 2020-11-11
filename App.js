import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import home from "./screens/home";
import secondScreen from "./screens/secondScreen";
import register from "./screens/register"
import registrationSuccess from "./screens/registrationSuccess"


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="secondScreen" component={secondScreen} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="registrationSuccess" component={registrationSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}