
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function intro({ navigation }) {
  const goToNext = () => {
    navigation.navigate("LandingPage");
  };
  return (
    <View style={styles.container}>
      <MaterialIcons name="fitness-center" size={120} color="white" />
      <TouchableOpacity onPress={goToNext}>
        <Text style={styles.linkText}>"We Build Character"</Text>
      </TouchableOpacity>
      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001f3f",
  },
  linkText: {
    fontSize: 24,
    textAlign: 'center',
    color: "hsla(210, 100%, 75%, 1.0)",
    marginTop: 50,
  },
});