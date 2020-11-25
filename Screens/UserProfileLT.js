
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



export default function UserProfileLT({ navigation }) {
   const goToUserProfileWP = () => {
      navigation.navigate("UserProfileWP");
    };

    const goToUserProfileCH = () => {
      navigation.navigate("UserProfileCH");
    };

    return(
        <View style={styles.container}>
          <View style={styles.bar}>
            <View style={[styles.bar1]}>
               <FontAwesome name="picture-o" size={48} color="black" /> 
               <Text style={styles.head}> Username </Text>
            </View>   
            <Feather name="settings" size={34} color="black" /> 
         </View>
         <View style={styles.optionBar}>
            <TouchableOpacity  onPress={goToUserProfileWP}>
               <Text style={styles.headopt}> Programs</Text>
            </TouchableOpacity>
            
                
            <Text style={styles.headopt1}> Level Test</Text>
                
            <TouchableOpacity  onPress={goToUserProfileCH}>   
               <Text style={styles.headopt}> Challenges</Text>
            </TouchableOpacity>   
               
         </View>
         <View style={styles.bar1}>
               <Text style={styles.head1}>Till Nows</Text>
               <TouchableOpacity>
                  <AntDesign name="caretdown" size={36} color="black" />
                </TouchableOpacity> 
             </View>
         <ScrollView> 
             <View>
                <Text style={styles.head1}> Mobility Test</Text>
             </View>
             <View style={styles.bar}>
                <Text style={styles.head1}> Date</Text>
                <Text style={styles.head1}> Completed In</Text>
                <Text style={styles.head1}> Stats</Text>
             </View>
             <View style={styles.bar}> 
                <Text style={styles.head2}> Baisakh 1</Text>
                <Text style={styles.head2}> 15 Minutes</Text>
                <Text style={styles.head2}> 4/10</Text>
             </View>
             <View style={styles.bar}> 
                <Text style={styles.head2}> Baisakh 2</Text>
                <Text style={styles.head2}> 10 Minutes</Text>
                <Text style={styles.head2}> 6/10</Text>
             </View>
             <View style={styles.bar}> 
                <Text style={styles.head2}> Baisakh 3</Text>
                <Text style={styles.head2}> 5 Minutes</Text>
                <Text style={styles.head2}> 8/10</Text>
             </View>
             <View style={styles.icon}>  
                <Entypo name="bar-graph" size={280} color="black" />
                <Text style={styles.head4}>  Baisakh 1  Baisakh 2  Baisakh 3</Text>    
             </View>

             <View>
                <Text style={styles.head1}> Endurance Test</Text>
             </View>
             <View style={styles.bar}>
                <Text style={styles.head1}> Date</Text>
                <Text style={styles.head1}> Completed In</Text>
                <Text style={styles.head1}> Stats</Text>
             </View>
             <View style={styles.bar}> 
                <Text style={styles.head2}> Baisakh 1</Text>
                <Text style={styles.head2}> 15 Minutes</Text>
                <Text style={styles.head2}> 4/10</Text>
             </View>
             <View style={styles.bar}> 
                <Text style={styles.head2}> Baisakh 2</Text>
                <Text style={styles.head2}> 10 Minutes</Text>
                <Text style={styles.head2}> 6/10</Text>
             </View>
             <View style={styles.bar}> 
                <Text style={styles.head2}> Baisakh 3</Text>
                <Text style={styles.head2}> 5 Minutes</Text>
                <Text style={styles.head2}> 8/10</Text>
             </View>
             <View style={styles.icon}>  
                <Entypo name="bar-graph" size={280} color="black" />
                <Text style={styles.head3}>  Baisakh 1  Baisakh 2  Baisakh 3</Text>    
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
 head4:{
   fontSize: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   marginLeft: 0,
   marginBottom: 15,
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
   marginLeft: 8,
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

 
 icon:{
   alignItems: 'center'
 },
});