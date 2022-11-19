import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";

export default function Login({navigation}) {
    return (
        <View style = {stylesM.container}>
            <View style={stylesM.button}>
            <TouchableOpacity
            style = {stylesM.buttonContainerD}
            onPress={() => navigation.navigate('addPatient')} >
            <Text style = {stylesM.buttonTextD}>Add Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {stylesM.buttonContainerD}
            onPress={() => navigation.navigate('addPatientRecord')} >
            <Text style = {stylesM.buttonTextD}>Add Patient Records</Text>
            </TouchableOpacity>
            </View>

            <View style={stylesM.button2}>
            <TouchableOpacity
            style = {stylesM.buttonContainerD}
            onPress={() => navigation.navigate('viewPatient')} >
            <Text style = {stylesM.buttonTextD}>View Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {stylesM.buttonContainerD}
            onPress={() => navigation.navigate('viewPatientRecords')} >
            <Text style = {stylesM.buttonTextD}>View Patient Records</Text>
            </TouchableOpacity>
            </View>
            

            <TouchableOpacity
            style={stylesM.buttonContainerT}
            onPress={() => navigation.navigate('listallPatients')} >
            <Text style={stylesM.buttonTextI}>List all Patients</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={stylesM.buttonContainer}
            onPress={() => navigation.navigate('login')} >
            <Text style={stylesM.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

// * * * * * * * STYLES * * * * * * * //

const stylesM = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00FFFF'
      },
    buttonContainer: {
      backgroundColor: "#5C78E9",
      marginHorizontal: 140,
      padding: 15,
      borderRadius: 25,
      marginTop: 100,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: 16,
      letterSpacing: 0.5,
      fontWeight: "500",
    },
    button: {
        marginVertical: 10,
        marginTop: 80,
        flexDirection: "row",
      },
      button2: {
        marginVertical: 10,
        flexDirection: "row",
      },
    buttonContainerD: {
        backgroundColor: "#EA9999",
        marginHorizontal: 20,
        padding: 40,
        borderWidth: 3,
        borderColor: 'black',
        marginVertical: 10,
        maxWidth: 170,
        maxHeight: 150,
      },
      buttonTextD: {
        color: "black",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: "500",
      },

    buttonContainerI: {
        backgroundColor: "#EA9999",
        marginHorizontal: 20,
        padding: 40,
        borderWidth: 3,
        borderColor: 'black',
        marginVertical: 10,
        maxWidth: 170,
        maxHeight: 150,
        flexDirection: 'row'
      },
      buttonTextI: {
        color: "black",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: "500",
      },
      buttonContainerT: {
        backgroundColor: "#A2C4C9",
        marginHorizontal: 10,
        padding: 15,
        maxWidth: 250,
        marginTop: 10,
      },
  });