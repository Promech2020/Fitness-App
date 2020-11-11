
import React, { version } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function registrationSuccess({ navigation }) {

    return(
        <View>
            <Text style={styles.reg}> Registration Successfull!!</Text>
        </View>
        

    );
}

const styles = StyleSheet.create({
    reg: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 250,
    },
});