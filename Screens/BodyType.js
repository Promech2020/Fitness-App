import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function BodyType({ navigation }) {
  const goToNext = () => {
    navigation.navigate("Hello");
  };

  return (

    <View style={styles.container}>
      <View>
         <Text style={styles.head}> Choose your Body Type</Text>  
      </View>  
      <View>
        <Image style={styles.img} source={require('../assets/muscle.png')}/>

      </View>
     
      
      <View style={{ width: "100%", height: "100%", textAlign: "center", alignItems: "center", alignSelf: "center", marginTop: 0}}>
        <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 42, width: "70%", justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
          <Text style={{color: "white", textAlign: "center"}}> Finishs</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,    
  },

  head1:{
    color: "hsla(210, 100%, 75%, 1.0)",
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  head2:{
    fontSize: 24,
  },
  
  
  write: {

    width: 80,
    height: 90,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  
  },
   bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 90,
    marginBottom: 10,
 },

 img:{
    marginTop: 20,
    width: "100%",
    height: "80%",
 },
});
