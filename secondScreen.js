import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Touchable } from 'react-native';

export default function secondScreen( {navigation}) {
  const goToNext = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <AntDesign name="menuunfold" size={28} color="black" />

        <MaterialIcons name="fitness-center" size={28} color="black" />

        <FontAwesome name="search" size={28} color="black" />
      </View>
      <View>
        <Text style={styles.quote}> " You Only Live Once " </Text>
      </View>
      <View>
        <Button onPress={goToNext} title="Sign Up Now" />
      </View>
      <ScrollView>
      <View>
        <Text style={styles.quote}> Features </Text>
      </View>
      <View style={styles.mobileShape} />
      <View>
        <Text style={styles.quote}> Check Your Level</Text>
        <Text style={styles.para}> “ Get the track of your growth and There are many variations of passages of Lorem Ipsum available”</Text>
      </View>
      <View>
        <Text style={styles.quote}> User Comment and growth</Text>
      </View>
      <View style={styles.icon}>  
        <Entypo name="bar-graph" size={280} color="black" />
          <Text> Day 1       Day 2        Day n</Text>    
      </View>
      <View>
        <Text style={styles.para}> “Amazing workout today, great following SP”</Text>
        <Text style={styles.ano}> ~anonymous</Text>
      </View>
      <View>
        <Text style={styles.quote}> Measure your Calories</Text>
        <Text style={styles.para}> “ Get the track of your calories and There are many variations of passages of Lorem Ipsum available”</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.quote}> Measure your now!</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.quote1}> Your Goal Our App</Text>
      </View>
      <View >
       <Text style={styles.para}> Learn with the best coach in Nepal</Text>
      </View>
      <View style={styles.imageContainer}>
        <View>
         <View style={styles.imageShape}/>
         <Text style={styles.imageDes}> Name</Text>
         <Text style={styles.imageDes}> Description</Text>
         <Text style={styles.imageDes}> Achievements</Text>
        </View>
        <View>
         <View style={styles.imageShape}/>
         <Text style={styles.imageDes}> Name</Text>
         <Text style={styles.imageDes}> Description</Text>
         <Text style={styles.imageDes}> Achievements</Text>
        </View>   
      </View>
      <View >
       <Text style={styles.para}> Enroll with the Best Gym in Nepal</Text>
      </View>
      <View style={styles.imageContainer}>
        <View>
         <View style={styles.imageShape}/>
         <Text style={styles.imageDes}> Gym Name</Text>
         <Text style={styles.imageDes}> Location</Text>
         <Text style={styles.imageDes}> Description</Text>
        </View>
        <View>
         <View style={styles.imageShape}/>
         <Text style={styles.imageDes}> Gym Name</Text>
         <Text style={styles.imageDes}> Location</Text>
         <Text style={styles.imageDes}> Description</Text>
        </View>   
      </View>
      <View >
       <Text style={styles.para}> Know your body and enjoy healthy nepali diet</Text>
      </View>
      <View style={styles.imageContainer}>
        <View>
         <View style={styles.imageShape}/>
         <Text style={styles.imageDes}> Name</Text>
         <Text style={styles.imageDes}> Certificate</Text>
         <Text style={styles.imageDes}> Experience</Text>
        </View>
        <View>
         <View style={styles.imageShape}/>
         <Text style={styles.imageDes}> Name</Text>
         <Text style={styles.imageDes}> Certificate</Text>
         <Text style={styles.imageDes}> Experience</Text>
        </View>   
      </View>
      <View>
        <Button onPress={goToNext} title="Sign Up Now" />
      </View>
      <View>
        <Text style={styles.quote1}> Get Inspired</Text>
      </View>
      <View>
        <Text style ={styles.para}>“This app is dedicated to all the fitness lover. We are trying to create a community where we alll can learn from professionals.”</Text>
      </View>
      <View>
        <View style={styles.imageShape1}/>
        <Text style={styles.quote}> See how username lost 5kgs for boxing match</Text>
        <TouchableOpacity>
          <Text style={styles.quote1}> Watch Now</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.imageShape1}/>
        <Text style={styles.quote}> See how username lost 5kgs for boxing match</Text>
      </View>  
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },

  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },

  quote1:{
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 5,
  },


  quote: {
    
  
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },

  para:{
    marginTop: 20,   
    marginBottom: 20, 
    fontSize: 20,
    textAlign: 'center',
  },

  ano:{
    textAlign: 'right',
    marginRight: 30,
    fontSize: 18,
  },

  mobileShape: {
    alignSelf: 'center',
    marginTop: 0,
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
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
    marginTop: 0,
    width: 340,
    height: 280,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },

  imageDes:{
    fontSize: 18,
  },

  icon:{
    alignItems: 'center'
  }
});
