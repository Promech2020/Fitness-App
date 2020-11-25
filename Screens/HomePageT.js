
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewBase} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";


export default function HomepageT({ navigation }) {
   const goToNext = () => {
    navigation.navigate("HomePageSP");
  };
  const goToNext1 = () => {
    navigation.navigate("HomePageFY");
  };
  const goToNext2 = () => {
    navigation.navigate("HomePagCH");
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
             <TouchableOpacity onPress={goToNext1}>
                   <Text style={styles.headopt1}> For You</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNext}>
                   <Text style={styles.headopt}> Acc to SP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNext}>
                   <Text style={styles.headopt}> Challenges</Text>
                </TouchableOpacity>
                 <Text style={styles.headopt0}> Trainer</Text>
             </View>
            <ScrollView> 
                <View>
                    <Text style={styles.head1}>thePumpNepal</Text> 
                </View>   

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    </View>  
               
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    
                    </View>
                </View>

                <View>
                    <Text style={styles.head1}>thePumpNepal</Text> 
                </View>   

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    </View>  
               
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    
                    </View>
                </View>

                <View>
                    <Text style={styles.head1}>thePumpNepal</Text> 
                </View>   

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    </View>  
               
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    
                    </View>
                </View>

                <View>
                    <Text style={styles.head1}>thePumpNepal</Text> 
                </View>   

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    </View>  
               
                    <View>
                        <View style={styles.imageShape}/>
                         <Text style={styles.imageDes}> Name:</Text>
                         <Text style={styles.imageDes}> Experience:</Text>
                         <Text style={styles.imageDes}> Training Field:</Text>
                         <Text style={styles.imageDes}> Top Clients:</Text>
                    
                    </View>
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

 head4:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
 },

 head5:{
    fontSize: 24,
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
   marginBottom: 10,
  },

  headopt:{
   marginTop: 10,
   marginLeft: 24,
   fontSize: 15,
   marginBottom:10,
  },

  headopt0:{
    marginTop: 10,
    marginLeft: 24,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom:10,
   },

   imageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  imageShape:{
    
    marginTop: 0,
    width: 140,
    height: 130,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
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

 imageShape2:{
    alignSelf: 'center', 
    marginTop: 10,
    width: 360,
    height: 200,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1, 
  },

 para:{
   marginTop: 20,   
   marginBottom: 20, 
   fontSize: 20,
   textAlign: 'center',
 },

 challenge:{
    marginTop: 10,
    marginLeft: 24,
    fontSize: 15,
    
   },



});