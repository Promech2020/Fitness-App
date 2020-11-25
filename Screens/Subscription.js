
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase, TouchableOpacityBase} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";


export default function Subscription({ navigation }) {
    const goToNext = () => {
        navigation.navigate("Payment");
    };       
 

    return(
        <View style={styles.container}>
          <View style={styles.bar}>
             <MaterialIcons name="fitness-center" size={48} color="black" />
             <TouchableOpacity>
               <FontAwesome name="picture-o" size={48} color="black" />
             </TouchableOpacity>
             
             
         </View>
         <View>
             <Text style={styles.head1}> Hello Username!!</Text>
             <Text style={styles.head1}> Welcome To thepumpNepal.</Text>
            
         </View>
            <ScrollView> 

               <View>
                  <Text style={styles.head3}>GET IN SHAPE TO LOOK AND FEEL GOOD</Text>
               </View>
               
               <View>
                  <Text style={styles.head}> 1.Get access to all our training programs</Text>
                  <Text style={styles.head}> 2.Personal Diet acc to training programs</Text>
                  <Text style={styles.head}>  3.Program According to your goals</Text>

               </View>

               <View style={styles.optionBar}>
                 <TouchableOpacity>
                   <Text style={styles.headopt}> 3 Months </Text>
                 </TouchableOpacity>
                 <Text style={styles.headopt1}> 6 Months</Text>
                 <TouchableOpacity>
                   <Text style={styles.headopt}> 12 Months</Text>
                 </TouchableOpacity>
             
             </View>
                <View style={styles.optionBar}>
                    <View >
                        <Text style={styles.head3}> 6 Months</Text>
                        <Text style={styles.head3}> Training</Text>
                    </View>
                    <View>
                        <Text style={styles.head3}>         Rs 5000/-</Text>
                    </View>
                </View>
               <View>
                <TouchableOpacity onPress={goToNext} style={{borderWidth: 1, height: 60, width: 190, marginBottom: 5, marginTop: 30,  justifyContent: "center",borderRadius: 10, alignSelf: "center", backgroundColor: "black"}}>
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
   marginTop: 30,
   fontSize: 18,
   fontWeight: 'bold',
   marginBottom: 10,
   marginLeft: 24,
   borderWidth: 1,
   backgroundColor: 'white',
  },

  headopt:{
   marginTop: 30,
   marginLeft: 22,
   fontSize: 18,
   marginBottom:10,
   borderWidth: 1,
   backgroundColor: 'white',
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