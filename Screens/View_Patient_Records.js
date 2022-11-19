import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import { DataTable } from 'react-native-paper';

export default function View_Patient_Records({navigation}) {

    return (
        <View style = {stylesVPR.container}>
          <View style = {stylesVPR.search}>
          <Text style = {stylesVPR.textSearch}>Patient</Text>
          <TextInput
          placeholder = "Patient ID"
          style = {stylesVPR.inputBox}
          onChangeText = {(Text) => this.setState({ PatientID: Text })}
        />
        <TouchableOpacity
            style={stylesVPR.buttonContainer}
            onPress={() => navigation.navigate('mainScreen')}
          >
            <Text style={stylesVPR.buttonText}>Search</Text>
        </TouchableOpacity>
          </View>

        <View style = {stylesVPR.viewName}>
            <Text style = {stylesVPR.textName}>Full Name:</Text>
            <Text style = {stylesVPR.textName}>Some text</Text>

        </View>

        <DataTable style = {stylesVPR.containerData}>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Blood Pressure ( X/Y mmHg )</DataTable.Title>
            <DataTable.Title>Respiratory Rate ( X/min )</DataTable.Title>
            <DataTable.Title>Blood Oxygen ( X% )</DataTable.Title>
            <DataTable.Title>Heartbeat Rate ( X/min )</DataTable.Title>
            <DataTable.Title>Critical conditions</DataTable.Title>
          </DataTable.Header>
  
          <DataTable.Row>
            <DataTable.Cell>5/11/2022</DataTable.Cell>
            <DataTable.Cell>120</DataTable.Cell>
            <DataTable.Cell>50</DataTable.Cell>
            <DataTable.Cell>98</DataTable.Cell>
            <DataTable.Cell>155</DataTable.Cell>
            <DataTable.Cell>Normal</DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>5/11/2022</DataTable.Cell>
            <DataTable.Cell>110</DataTable.Cell>
            <DataTable.Cell>44</DataTable.Cell>
            <DataTable.Cell>33</DataTable.Cell>
            <DataTable.Cell>180</DataTable.Cell>
            <DataTable.Cell>Normal</DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>5/11/2022</DataTable.Cell>
            <DataTable.Cell>46</DataTable.Cell>
            <DataTable.Cell>92</DataTable.Cell>
            <DataTable.Cell>33</DataTable.Cell>
            <DataTable.Cell>150</DataTable.Cell>
            <DataTable.Cell>Normal</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <View style={stylesVPR.button}>
        <TouchableOpacity
            style={stylesVPR.buttonContainer}
            onPress={() => navigation.navigate('mainScreen')}
          >
            <Text style={stylesVPR.buttonText}>Back</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  

  // * * * * * * * STYLES * * * * * * * //

const stylesVPR = StyleSheet.create({
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#00FFFF'
    },
    containerData: {
        marginVertical: 30,
        paddingHorizontal: 0,
        backgroundColor: '#EEEEEE'
      },
      viewName: {
        marginVertical: 10,
        flexDirection: 'row',
      },
      textName: {
        fontSize: 18,
        fontWeight: 'bold',
        width: "40%",
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
  });
