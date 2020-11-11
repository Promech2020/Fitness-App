import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function register({ navigation }) {
  const goToNext = () => {
    navigation.navigate("registrationSuccess");
  };

  return (

    <View style={styles.container}>
      <Text style={styles.change}>Sign Up</Text>
      <ScrollView>
      <Text style ={styles.sub}>First Name </Text>
      <TextInput style={styles.write}/>
      <Text style={styles.sub}>Last Name</Text>
      <TextInput style={styles.write}/>
      <Text style={styles.sub}>Email</Text>
      <TextInput style={styles.write}/>
      <Text style={styles.sub}>Username</Text>
      <TextInput style={styles.write}/>
      <Text style={styles.sub}>Password</Text>
      <TextInput style={styles.write}/>
      <Text style={styles.sub}>Confirm Password </Text>
      <TextInput style={styles.write}/>
      <View style={styles.check}>
         <Ionicons name="ios-checkbox" size={24} color="black" />
         <Text style={styles.checkText}> By registering you accept the Terms of Services and Privacy Policy.</Text>
      </View>
      <View>
        <Button  onPress={goToNext} title="Register" />
      </View>
      </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  change: {
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  sub:{

    marginTop: 30,
    marginLeft: 4,
    fontSize: 16,

  },

  write: {
    marginTop: 15,
    marginLeft: 4,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey'
  },
  check:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    
  },
  checkText:{
      marginLeft: 20,
      marginTop: 2,
      alignSelf: 'flex-start',
      textAlign: 'left',
  }

});
