
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";


export default function HomePageMenu({ navigation }) {
   const goToNext = () => {
    navigation.navigate("HomePageSP");
  };

  const goToNext1 = () => {
   navigation.navigate("HomePageCH");
 };

 const goToNext2 = () => {
   navigation.navigate("HomePageT");
 };
 const goToUserProfile = () => {
   navigation.navigate("UserProfileWP");
 };

 const goToWorkoutPageIntro = () => {
   navigation.navigate("WorkoutPageIntro");
 };



    return(
        <View style={styles.container}>
            <View style={styles.bar}>
                <MaterialIcons name="fitness-center" size={48} color="black" />
                <TouchableOpacity onPress={goToUserProfile}>
                    <FontAwesome name="picture-o" size={48} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{borderWidth: 1, height: 40, width: 150, marginBottom: 5, marginTop: 10, margnLeft: 50,borderRadius: 10, backgroundColor: "white"}}>
                    <Text style={{color: "black",marginTop: 5, textAlign: "center"}}> Calorie Count</Text>
                </TouchableOpacity>
            </View> 
            <View>
                <TouchableOpacity style={{borderWidth: 1, height: 40, width: 150, marginBottom: 5, marginTop: 10, margnLeft: 50,borderRadius: 10, backgroundColor: "white"}}>
                    <Text style={{color: "black",marginTop: 5, textAlign: "center"}}> Know Your Level</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{borderWidth: 1, height: 40, width: 150, marginBottom: 5, marginTop: 10, margnLeft: 50,borderRadius: 10, backgroundColor: "white"}}>
                    <Text style={{color: "black",marginTop: 5, textAlign: "center"}}> Nutrition</Text>
                </TouchableOpacity>
            </View>        
            <ScrollView> 
             <View>
                <Text style={styles.head1}>Home Workouts</Text>
             </View>
             <View style={styles.imageContainer}>
               <TouchableOpacity onPress={goToWorkoutPageIntro}>
                  <View style={styles.imageShape}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={goToWorkoutPageIntro}>
                  <View style={styles.imageShape}/>
               </TouchableOpacity>
               

             </View>
             <View>
                <Text style={styles.head1}>Recently Added</Text>
             </View>

             <View style={styles.imageContainer}>
               <View style={styles.imageShape}/>
               <View style={styles.imageShape}/>

             </View>
             <View>
                <Text style={styles.head}> Learn from the</Text>
                <Text style={styles.head1}>  Mistakes</Text>
             </View>
             <View>
                <Text style={styles.head1}> Story of experts</Text>
             </View>
             <View>
               <View style={styles.imageShape1}/>
             </View>
             <View>
                <Text style={styles.para}>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</Text>
             </View>

             <View>
                <Text style={styles.head}> Importance of Healthy </Text>
                <Text style={styles.head1}>         Life</Text>
             </View>
             <View>
                <Text style={styles.head1}>Listen What they say</Text>
             </View>
             <View>
               <View style={styles.imageShape1}/>
             </View>
             <View>
                <Text style={styles.para}>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</Text>
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