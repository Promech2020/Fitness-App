
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function HomePageSP({ navigation }) {
   const goToNext = () => {
      navigation.navigate("HomePageFY");
    };

    const goToNext1 = () => {
      navigation.navigate("HomePageCH");
    };

    return(
        <View style={styles.container}>
          <View style={styles.bar}>
             <MaterialIcons name="fitness-center" size={48} color="black" />
             <FontAwesome name="picture-o" size={48} color="black" />
         </View>
         <View style={styles.bar1}>
            <Feather name="menu" size={36} color="black" />
            <Text style={styles.head}> Workout Programs</Text>
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
             <Text style={styles.head2}> You whether train hard or go home.</Text>
             <Text style={styles.head3}> Welcome Username to our Workout Programs</Text>
         </View> 

         
             <View style={styles.optionBar}>
                 <TouchableOpacity onPress={goToNext}>
                   <Text style={styles.headopt1}> For You</Text>
                 </TouchableOpacity>
                 <Text style={styles.headopt0}> Acc to SP</Text>
                 <TouchableOpacity onPress={goToNext1}>
                   <Text style={styles.headopt}> Challenges</Text>
                 </TouchableOpacity>
                 <Text style={styles.headopt}> Trainer</Text>
             </View>
         <ScrollView>  
             <View style={styles.bar1}>
                <Text style={styles.dropMenu}>thePumpNepal</Text> 
                <TouchableOpacity>
                  <AntDesign name="caretdown" size={36} color="black" />
                </TouchableOpacity>           
             </View>
             <View>
                <Text style={styles.head2}> "Pump Nepal Training Quotes."</Text>
                <Text style={styles.headLoc}> Jhamsikhel, Lalitpur</Text>
             </View>
             <View>
                <Text style={styles.head1}>Categories</Text>
             </View>
             <View style={styles.bar1}>
               <Text style={styles.head1}>Strength</Text>
               <TouchableOpacity>
                  <AntDesign name="caretdown" size={36} color="black" />
                </TouchableOpacity> 
             </View>

            
             <View>
                <Text style={styles.head1}>Programs</Text>
             </View>
             <View>
               <View style={styles.imageShape}/>
               <Text style={styles.head3}> 4 weeks sports man workout: (Strength)</Text>
               <Text style={styles.head2}> Work like a professional sports man to be like one of them. Check it out!s</Text>
             </View>

             <View>
               <View style={styles.imageShape}/>
               <Text style={styles.head3}> 8 weeks Superman workout</Text>
               <Text style={styles.head2}> Work like a professional sports man to be like one of them. Check it out!s</Text>
             </View>

             <View>
               <View style={styles.imageShape}/>
               <Text style={styles.head3}> Live like Cristiano for a day</Text>
               <Text style={styles.head2}> Work like a professional sports man to be like one of them. Check it out!s</Text>
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

 headLoc:{
   fontSize: 12,
   fontWeight: 'normal',
   textAlign: 'right',
   marginLeft: 0,
   marginTop: 10,
   marginRight: 10,
   marginBottom: 10,
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

   dropMenu:{
   fontSize: 16,
   marginBottom: 10,
   fontSize: 24,
   fontWeight: 'bold',
  },

  headopt1:{
   marginTop: 10,
   fontSize: 16,
   marginBottom: 10,
  },
  headopt0:{
   marginTop: 10,
   marginLeft: 24,
   fontSize: 15,
   fontWeight: 'bold',
   marginBottom:10,
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
   alignSelf: 'center', 
   marginTop: 10,
   width: 360,
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