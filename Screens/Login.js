import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Login({navigation}) {


  const [ UserName, setUserName ] = useState('')
  const [ Password, setPassWord ] = useState('')


    return (
        <View style = {stylesR.container}>
        <TextInput
          placeholder="UserName"
          style={stylesR.inputBox}
          onChangeText={text => setUserName(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder="Password"
          style={stylesR.inputBox}
          secureTextEntry={true}
          onChangeText={text => setPassWord(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />

        <View style={stylesR.button}>
        <TouchableOpacity
            style={stylesR.buttonContainer}
            onPress={() => navigation.navigate('mainScreen')}
          >
            <Text style={stylesR.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={stylesR.buttonContainer}
            onPress={() => navigation.navigate('register')}
          >
            <Text style={stylesR.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}



// * * * * * * * STYLES * * * * * * * //

const stylesR = StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      padding: 20,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#00FFFF'
    },
    inputBox: {
      width: "80%",
      borderWidth: 0.5,
      padding: 10,
      fontSize: 22,
      marginVertical: 10,
      borderRadius: 2,
      backgroundColor: '#BDC0CB'
    },
    button: {
      marginVertical: 40,
      flexDirection: "row",
    },
    buttonContainer: {
      backgroundColor: "#5C78E9",
      marginHorizontal: 10,
      padding: 15,
      borderRadius: 25,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: 16,
      letterSpacing: 0.5,
      fontWeight: "500",
    },
  });