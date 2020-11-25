
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native";


export default function WorkoutPageDown({ navigation }) {
   const goToNext = () => {
    navigation.navigate("WorkoutpageStartNow");
  };



    return(
        <View style={styles.container}>
          <View style={styles.bar}>
             <MaterialIcons name="fitness-center" size={48} color="black" />    
          </View>
          <ScrollView>
            <View>
                <TouchableOpacity style={{borderWidth: 1, height: 250, marginBottom: 30, marginTop: 10, width: "85%", justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "white"}}>
                    <Text style={{color: "black", textAlign: "center"}}> Workout Video</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.head}> Training Breakdown</Text>
            </View>
            <View>
                <TouchableOpacity style={{borderWidth: 1, height: 250, marginBottom: 30, marginTop: 10, width: "85%", justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "white"}}>
                    <Text style={{color: "black", textAlign: "center"}}> Workout Video</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.head}> Warm up</Text>
            </View>

            <View style={styles.bar}>
                <Text style={styles.head2}> 5 Minutes</Text>
                <Text style={styles.head2}> Moderate</Text>
                <Text style={styles.head2}> Beginner</Text>
            </View>
            <View style={styles.bar}> 
                <Text style={styles.head1}> Time</Text>
                <Text style={styles.head1}>   Intensity</Text>
                <Text style={styles.head1}> Body Part</Text>
            </View>
        
            <View>
                <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 150, width: 150, marginBottom: 5, marginTop: 30,  justifyContent: "center",borderRadius: 100, alignSelf: "center", backgroundColor: "black"}}>
                    <Text style={{color: "white", textAlign: "center"}}> Start Now</Text>
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
     marginLeft: 0,
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
    marginTop: 10,
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
    
   marginTop: 0,
   width: 160,
   height: 190,
   backgroundColor: 'black',
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
 img:{
    marginTop: 30,
    width: "100%",
    height: 300,
    marginBottom: 30,
 },
});