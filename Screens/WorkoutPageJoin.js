
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';



export default function WorkoutPageJoin({ navigation }) {
   const goToNext = () => {
      navigation.navigate("ServiceProviderPageFY");
    };
  

    return(
        <View style={styles.container}>
         <ScrollView>
          <View>
              <Text style={styles.head}> Workout Name</Text>
          </View> 
          <View style={styles.bar}>
            <View style={[styles.bar1]}>
               <FontAwesome name="picture-o" size={48} color="black" /> 
               <Text style={styles.head}> Username </Text>
            </View>   
         </View>
         <View style={styles.optionBar}>
            <Text style={styles.head}> Total Time</Text>   
            <Text style={styles.headopt}> 20:00</Text>      
         </View>
         <View>
             <Text style={styles.head}> Warm Up</Text>
         </View>
         <View style={styles.optionBar}>
            <Text style={styles.head}> Time</Text>   
            <Text style={styles.headopt}> 00:00</Text>      
         </View>
         <View>
             <Text style={styles.head}> Hand</Text>
         </View>
         <View style={styles.optionBar}>
            <Text style={styles.head}> Time</Text>   
            <Text style={styles.headopt}> 00:00</Text>      
         </View>
         <View>
             <Text style={styles.head}> Warm Up</Text>
         </View>
         <View style={styles.optionBar}>
            <Text style={styles.head}> Time</Text>   
            <Text style={styles.headopt}> 00:00</Text>      
         </View>
         <View>
             <Text style={styles.head}> Hand</Text>
         </View>
         <View style={styles.optionBar}>
            <Text style={styles.head}> Time</Text>   
            <Text style={styles.headopt}> 00:00</Text>      
         </View>
         <View style={styles.optionBar}>
            <Text style={styles.head}>Calories Burned</Text>   
            <Text style={styles.headopt}> 200 cal</Text>      
         </View>
         <View>
             <Text styles={styles.para}> “Hey i just completed this challenege and beat my own record, can you bet me?”</Text>
         </View>
         <View>
            <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 60, width: 190, marginBottom: 5, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
               <Text style={{color: "white", textAlign: "center"}}> Join This Gym</Text>
            </TouchableOpacity>
         </View>


         
         </ScrollView>
        </View>
        

    );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
 },
 bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
 },
 bar1: {
    flexDirection: 'row',
    marginLeft: 10,
 },

 bar2:{
    flexDirection: 'row',
 },

 optionBar:{
     flexDirection: 'row',
     marginLeft: 10,
     marginRight: 10,
     justifyContent: 'space-between'
 },

 searchIcon:{
    marginTop: 15,
    marginLeft: 20,
 },

 head:{
    fontSize: 20,
    fontWeight: 'bold',
 },

 head1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
 },
 
 head2:{
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
 },

 head3:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
 },

 searchBar:{
    marginLeft:20,
    marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },

  headopt1:{
   marginTop: 10,
   fontSize: 16,
   fontWeight: 'bold',
   marginBottom: 10,
  },

  headopt:{
   marginTop: 10,
   marginLeft: 24,
   fontSize: 15,
   marginBottom:10,
  },

  imageContainer:{
   flexDirection: 'row',
   justifyContent: 'space-between',
   padding: 30,
 },
 imageShape:{
    
   marginTop: 10,
   alignSelf: 'center',
   width: 280,
   height: 200,
   backgroundColor: 'white',
   borderColor: 'black',
   borderWidth: 1,
   
 },
 imageShape1:{
   alignSelf: 'center', 
   marginTop: 30,
   width: 190,
   height: 170,
   backgroundColor: 'white',
   borderColor: 'black',
   borderWidth: 1,
   borderRadius: 5,
   
 },

 para:{
   marginTop: 20,   
   marginBottom: 20, 
   fontSize: 20,
   textAlign: 'center',
 },
});