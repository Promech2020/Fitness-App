
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase, TouchableOpacityBase} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";


export default function ServiceProviderPageFY({ navigation }) {
   const goToServiceProviderPageW = () => {
      navigation.navigate("ServiceProviderPageW");
    };
   
   const goToSubsription = () => {
      navigation.navigate("Subscription");
    };
   

    return(
        <View style={styles.container}>
          <View style={styles.bar}>
             <MaterialIcons name="fitness-center" size={48} color="black" />
             <TouchableOpacity>
               <FontAwesome name="picture-o" size={48} color="black" />
             </TouchableOpacity>
             
             
         </View>

         <View style={styles.bar2}>
            <TextInput style={styles.searchBar}/>
            <View style={styles.searchIcon}>
                <TouchableOpacity>
                    <FontAwesome name="search" size={36} color="black" />
                </TouchableOpacity>
            </View>
         </View>

         <View>
             <Text style={styles.head1}> Hello Username!!</Text>
             <Text style={styles.head1}> Welcome To thepumpNepal.</Text>
            
         </View>

         
             <View style={styles.optionBar}>
                <Text style={styles.headopt1}> For You</Text>
                <TouchableOpacity onPress={goToServiceProviderPageW}>
                   <Text style={styles.headopt}> Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                   <Text style={styles.headopt}> Nutrition</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                   <Text style={styles.headopt}> Trainer</Text>
                </TouchableOpacity>
             </View>
            <ScrollView> 
               <View>
                <TouchableOpacity style={{borderWidth: 1, height: 250, width: 350, marginBottom: 30, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "white"}}>
                    <Text style={{color: "black", textAlign: "center"}}> thepumpNepal Intro Video</Text>
                </TouchableOpacity>
               </View>
               <View>
                  <Text style={styles.head3}> Our History</Text>
               </View>
               <View>
                  <Text style={styles.head}> 8 years</Text>
                  <Text style={styles.head1}> In this field</Text>
                  <Text style={styles.head}> 500+</Text>
                  <Text style={styles.head1}> Clients</Text>
                  <Text style={styles.head}> 10+</Text>
                  <Text style={styles.head1}> Trainers</Text>
               </View>
               <View>
                  <Text style={styles.para}> “Gym Quotes Hey i just completed this challenege and beat my own record, can you bet me?”</Text>
               </View>

               <View>
                  <Text style={styles.head3}> Our Satisfied Clients</Text>
               </View>
               <View>
                <TouchableOpacity style={{borderWidth: 1, height: 150, width: 150, marginBottom: 30, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "white"}}>
                    <Text style={{color: "black", textAlign: "center"}}> Photo</Text>
                </TouchableOpacity>
               </View>
               <View >
                  <Text style={styles.para}> “Hey i just completed this challenege and beat my own record, can you bet me?”</Text>
               </View>
               <View>
                  <Text style={styles.head3}> Your Goal Our Plan</Text>
               </View>
               <View>
                <TouchableOpacity style={{borderWidth: 1, height: 250, width: 350, marginBottom: 30, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "white"}}>
                    <Text style={{color: "black", textAlign: "center"}}> Video of pump showing plans</Text>
                </TouchableOpacity>
               </View>
               <View >
                  <Text style={styles.headopt}> Be a Premium Member</Text>
                  <Text style={styles.headopt}> Access all our plans and programs</Text>
                  <Text style={styles.headopt}> Work Hard</Text>
               </View>

               <View>
                <TouchableOpacity onPress={goToSubsription}  style={{borderWidth: 1, height: 60, width: 190, marginBottom: 5, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
                    <Text style={{color: "white", textAlign: "center"}}> Subscribe Now</Text>
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

 head1:{
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
 },

 
 head:{
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
 },

 head3:{
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
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