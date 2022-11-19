import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import MainScreen from "../Screens/MainScreen";
import Add_Patient from "../Screens/Add_Patient"
import Add_Patient_Records from "../Screens/Add_Patient_Record";
import View_Patient from "../Screens/View_Patient";
import View_Patient_Records from "../Screens/View_Patient_Records"
import List_all_Patients from "../Screens/List_all_Patients"

const Stack = createStackNavigator();

export default function Navigator() {
  return (
      <Stack.Navigator >
        <Stack.Screen
          name = "login"
          component = { Login }
          options = {{ title: 'Login', headerTitleStyle: { fontWeight: 'bold' },
          headerBackVisible: false }}
        />
        <Stack.Screen
          name = "register"
          component = { Register }
          options = {{ title: 'Register', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackVisible: false }}
        />
        <Stack.Screen
          name = "mainScreen"
          component = { MainScreen }
          options = {{ title: 'Dashboard', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => null }}
        />
        <Stack.Screen
          name = "addPatient"
          component = { Add_Patient }
          options = {{ title: 'Add New Patient', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => null}}
        />
        <Stack.Screen
          name = "addPatientRecord"
          component = { Add_Patient_Records }
          options = {{ title: 'Add New Patient Record', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => null}}
        />
        <Stack.Screen
          name = "viewPatient"
          component = { View_Patient }
          options = {{ title: 'View Patient', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => null}}
        />
        <Stack.Screen
          name = "viewPatientRecords"
          component = { View_Patient_Records }
          options = {{ title: 'View Patient Records', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => null}}
        />
        <Stack.Screen
          name = "listallPatients"
          component = { List_all_Patients }
          options = {{ title: 'List all Patients', 
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => null}}
        />
      </Stack.Navigator>
  )}
