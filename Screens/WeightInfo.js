import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';


export default function WeightInfo({ navigation }) {
  const goToNext = () => {
    navigation.navigate("Gender");
  };

  return (

    <View style={styles.container}>
      <View>
         <Text style={styles.head}> Your Weight</Text>  
      </View>  
      <View style={styles.bar}>
        <TextInput style={styles.write}/>
        <Text style={styles.head2}> Kgs</Text>
      </View>
      
      <View style={{ width: "100%", height: "100%", textAlign: "center", alignItems: "center", alignSelf: "center", marginTop: 50}}>
        <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 42, width: "70%", justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
          <Text style={{color: "white", textAlign: "center"}}> Continue</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  head: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,    
  },

  head1:{
    color: "hsla(210, 100%, 75%, 1.0)",
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  head2:{
    fontSize: 40,
  },
  
  
  write: {

    width: 100,
    height: 90,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  
  },
   bar: {
    flexDirection: 'row',
    marginLeft: 100,
    marginTop: 90,
    marginBottom: 10,
    alignItems: 'center',
 },
});
