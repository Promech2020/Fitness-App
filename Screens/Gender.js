import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';


export default function Gender({ navigation }) {
  const goToNext = () => {
    navigation.navigate("BodyType");
  };

  return (

    <View style={styles.container}>
      <View>
         <Text style={styles.head}> Gender</Text>  
      </View>  
      <View style={styles.bar}>
      <TouchableOpacity style={{borderWidth: 1, height: 80, width: "30%", justifyContent: "center",borderRadius: 10, alignSelf: "center",}}>
            <Text style={styles.head2}> Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth: 1, height: 80, width: "30%", justifyContent: "center",borderRadius: 10, alignSelf: "center",}}>
            <Text style={styles.head2}> Female</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth: 1, height: 80, width: "30%", justifyContent: "center",borderRadius: 10, alignSelf: "center",}}>
            <Text style={styles.head2}> Others</Text>
        </TouchableOpacity>
        
        
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
