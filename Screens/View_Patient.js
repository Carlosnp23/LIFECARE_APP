import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';


export default function AddNewPatientRecord({navigation}) {
    
      
    return (
        <View style = {stylesVP.container}>
          <View style = {stylesVP.search}>
          <Text style = {stylesVP.textSearch}>Patient</Text>
          <TextInput
          placeholder = "Patient ID"
          style = {stylesVP.inputBox}
          onChangeText = {(Text) => this.setState({ PatientID: Text })}
        />
        <TouchableOpacity
            style={stylesVP.buttonContainer}
            onPress={() => navigation.navigate('mainScreen')}
          >
            <Text style={stylesVP.buttonText}>Search</Text>
        </TouchableOpacity>
          </View>

        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>First Name:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Last Name:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Gender:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Mobile:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Date of Birth:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Email:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Address:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>City:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>Country:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>State/Province:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>
        <View style = {stylesVP.viewD}>
        <Text style = {stylesVP.textP}>ZIP/Postal Code:</Text>
        <Text style = {stylesVP.textD}>Some text</Text>
        </View>

        <View style={stylesVP.button}>
        <TouchableOpacity
            style={stylesVP.buttonContainer}
            onPress={() => navigation.navigate('mainScreen')}
          >
            <Text style={stylesVP.buttonText}>Cancel</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}


// * * * * * * * STYLES * * * * * * * //

const stylesVP = StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#00FFFF'
    },
    textSearch: {
        fontSize: 18,
        marginHorizontal: 20,
        fontWeight: "bold"
    },
    search: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#00FFFF'
    },
    inputBox: {
      width: "45%",
      borderWidth: 0.5,
      padding: 10,
      fontSize: 20,
      marginVertical: 10,
      borderRadius: 2,
      backgroundColor: '#FFE599'
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
      viewD: {
        flexDirection: 'row',
        padding: 10,
      },
      textP: {
        fontSize: 18,
        marginHorizontal: 20,
        fontWeight: "bold",
        width: "40%",
    },
    textD: {
        fontSize: 18,
        marginHorizontal: 20,
        width: "40%",
    },
  });
