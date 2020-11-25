import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function IntroVideo({ navigation }) {
  const goToNext = () => {
    navigation.navigate("HomePageFY");
  };

  return (

    <View style={styles.container}>
      <View>
         <Text style={styles.head}> Welcome to App name</Text>  
      </View>  
      <View>
        <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 450, marginBottom: 30, marginTop: 30, width: "75%", justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "white"}}>
          <Text style={{color: "black", textAlign: "center"}}> App Demo Video</Text>
        </TouchableOpacity>
      </View>
      
     
      
      <View style={{ width: "100%", height: "100%", textAlign: "center", alignItems: "center", alignSelf: "center", marginTop: 0}}>
        <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 42, width: "70%", justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
          <Text style={{color: "white", textAlign: "center"}}> Skip</Text>
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

});
