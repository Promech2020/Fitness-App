import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';


export default function WorkoutpageStartNow({ navigation }) {
  const goToNext = () => {
    navigation.navigate("WorkoutPageVideo");
  };

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={goToNext}>
        <Text style={styles.head}>5</Text>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  
  },

  head: {
    fontSize: 200,
    marginTop: 110,
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    
  },
  
});
