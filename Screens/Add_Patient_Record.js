import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import moment from 'moment';
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function AddNewPatientRecord({ navigation }) {

  const [First_Name, setFirst_Name] = useState('')
  const [Last_Name, setLast_Name] = useState('')
  const [CurrentDate, setCurrentDate] = useState('');
  const [CurrentTime, setCurrentTime] = useState('');
  const [Blood_Pressure, setBlood_Pressure] = useState('')
  const [Respiratory_Rate, setRespiratory_Rate] = useState('');
  const [Blood_Oxygen, setBlood_Oxygen] = useState('')
  const [Heartbeat_Rate, setHeartbeat_Rate] = useState('')
  const [Critical_conditions, setCritical_conditions] = useState('')



  const handleSubmit = async () => {
    if (First_Name === '' || Last_Name === '' || CurrentDate === ''
      || CurrentTime === '' || Blood_Pressure === '' || Respiratory_Rate === ''
      || Blood_Oxygen === '' || Heartbeat_Rate === '' || Critical_conditions === '') {
      alert("All fields are required");
      return;
    }
    await axios.post("http://127.0.0.1:3000/PatientsRecords/addNewPatientsRecords", {
      First_Name, Last_Name, CurrentDate, CurrentTime, Blood_Pressure,
      Respiratory_Rate, Blood_Oxygen, Heartbeat_Rate, Critical_conditions
    });
    alert("Add New Patients Records Successful");
  };

  useEffect(() => {
    var time = moment()
      .utcOffset('-05:00')
      .format(' hh:mm A');
    setCurrentTime(time);

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear();
    setCurrentDate(
      date + '/' + month + '/' + year);

  }, []);


  return (
    <KeyboardAwareScrollView>
      <View style={stylesAP.container}>
        <TextInput
          placeholder="First Name"
          style={stylesAP.inputBox}
          value={First_Name}
          onChangeText={text => setFirst_Name(text)}
          autoCapitalize="words"
          autoCorrect={false} />
        <TextInput
          placeholder="Last Name"
          style={stylesAP.inputBox}
          value={Last_Name}
          onChangeText={text => setLast_Name(text)}
          autoCapitalize="words"
          autoCorrect={false} />

        <View style={stylesAP.textdate}>
          <Text style={stylesAP.text}>  Date</Text>
          <Text style={stylesAP.time}>{CurrentDate}</Text>
        </View>
        <View style={stylesAP.textdate}>
          <Text style={stylesAP.text}> Time</Text>
          <Text style={stylesAP.time}>{CurrentTime}</Text>
        </View>

        <TextInput
          placeholder="Blood Pressure ( X/Y mmHg )"
          style={stylesAP.inputBox}
          value={Blood_Pressure}
          onChangeText={text => setBlood_Pressure(text)}
          keyboardType="decimal-pad"
          autoCorrect={false} />
        <TextInput
          placeholder="Respiratory Rate ( X/min )"
          style={stylesAP.inputBox}
          value={Respiratory_Rate}
          onChangeText={text => setRespiratory_Rate(text)}
          keyboardType="decimal-pad"
          autoCorrect={false} />
        <TextInput
          placeholder="Blood Oxygen ( X% )"
          style={stylesAP.inputBox}
          value={Blood_Oxygen}
          onChangeText={text => setBlood_Oxygen(text)}
          keyboardType="decimal-pad"
          autoCorrect={false} />
        <TextInput
          placeholder="Heartbeat Rate ( X/min )"
          style={stylesAP.inputBox}
          value={Heartbeat_Rate}
          onChangeText={text => setHeartbeat_Rate(text)}
          keyboardType="decimal-pad"
          autoCorrect={false} />
        <TextInput
          placeholder="Critical Conditions"
          style={stylesAP.inputBox}
          value={Critical_conditions}
          onChangeText={text => setCritical_conditions(text)}
          autoCapitalize="words"
          autoCorrect={false} />

        <View style={stylesAP.button}>
          <TouchableOpacity
            style={stylesAP.buttonContainer}
            onPress={() => navigation.navigate('mainScreen')}
          >
            <Text style={stylesAP.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesAP.buttonContainer}
            onPress={handleSubmit}
          >
            <Text style={stylesAP.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}


// * * * * * * * STYLES * * * * * * * //

const stylesAP = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    padding: 20,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#00FFFF'
  },
  text: {
    fontSize: 22,
    marginRight: 20,
  },
  buttonRadio: {
    flexDirection: 'row',
    marginRight: 90,
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
  textdate: {
    flexDirection: 'row',
    alignItems: "center",
  },
  time: {
    textAlign: "center",
    fontSize: 21,
    marginHorizontal: 65,
    marginVertical: 10,
  }
});