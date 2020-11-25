import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';


export default function Hello({ navigation }) {
  const goToNext = () => {
    navigation.navigate("Welcome");
  };

  return (

    <View style={styles.container}>
      <Text style={styles.head}> Hello Username!!</Text>
      <TouchableOpacity onPress={goToNext}>
          <Text style={styles.head1}> Continue</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  head: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 250,

  },

  head1:{
    color: "hsla(210, 100%, 75%, 1.0)",
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
});
