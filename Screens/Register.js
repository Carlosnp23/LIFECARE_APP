import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import axios from 'axios'

export default function Register({navigation}) {

  const [ Full_Name, setFull_Name ] = useState('')
  const [ UserName, setUserName ] = useState('')
  const [ Password, setPassWord ] = useState('')
   

  const handleSubmit = async () => {
    if (Full_Name === '' || UserName === '' || Password === '') {
        alert("All fields are required");
        return;
    }
    await axios.post("http://127.0.0.1:3000/Users/addUsers", { Full_Name, UserName, Password });
    alert("Sign Up Successful");

    navigation.navigate("login");

};

    return (
        <View style = {stylesR.container}>
            <TextInput
          placeholder="Full Name"
          style={stylesR.inputBox}
          value={Full_Name}
          onChangeText={text => setFull_Name(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder="UserName"
          style={stylesR.inputBox}
          value={UserName}
          onChangeText={text => setUserName(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder="Password"
          style={stylesR.inputBox}
          value={Password}
          secureTextEntry={true}
          onChangeText={text => setPassWord(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />

        <View style={stylesR.button}>
        <TouchableOpacity
            style={stylesR.buttonContainer}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={stylesR.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={stylesR.buttonContainer}
            onPress={handleSubmit}
          >
            <Text style={stylesR.buttonText}>Register</Text>
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