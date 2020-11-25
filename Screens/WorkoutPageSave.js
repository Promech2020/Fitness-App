
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native";

export default function WorkoutPageSave({ navigation }) {
   const goToNext = () => {
    navigation.navigate("WorkoutPageJoin");
  };
    return(
        <View style={styles.container}>
         <ScrollView>
            <View>
                <TextInput placeholder='Name Your Workout' style={styles.write}/> 
                <TextInput placeholder='Comment yourself' style={styles.write}/> 
            </View>
            <View>
                <Text style={styles.head}>How are you feeling now? </Text>
            </View>
            <View style={styles.icon}>
                <MaterialIcons name="linear-scale" size={100} color="black" />
            </View>
            <View style={styles.bar}>
                <Text style={styles.head1}> Cool</Text>
                <Text style={styles.head1}> Okay</Text>
                <Text style={styles.head1}> Tired</Text>
            </View>
            <View style={styles.bar1}>
                <TouchableOpacity>
                    <Entypo name="camera" size={36} color="black" />
                </TouchableOpacity>
                
                <Text style={styles.head1}> Add a photo?</Text>
            </View>
            <View>
                <Text style={styles.head}> Rate this workout</Text>
            </View>
            <View style={styles.bar1}>
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star" size={24} color="black" />
            </View>
            <View>
                <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 60, width: 190, marginBottom: 5, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
                    <Text style={{color: "white", textAlign: "center"}}> Save</Text>
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
    justifyContent: 'space-between',
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 10,
    marginRight: 30,
 },

 write: {
    marginTop: 30,
    marginLeft: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    width: 320,
    height: 50,
  },

 head:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 30,
 },

 head1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 0,
 },

 icon:{
    alignItems:'center',
 }

 
});