import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RadioGroup from 'react-native-radio-buttons-group';



const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Male',
    value: 'Male',
  },
  {
    id: '2',
    label: 'Female',
    value: 'Female',
  },
];

export default function AddNewPatient({navigation}) {

  const [ First_Name, setFirst_Name ] = useState('')
  const [ Last_Name, setLast_Name ] = useState('')
  const [ GenderValue, setGenderValue ] = React.useState('')
  const [ Mobile, setMobile ] = useState('')
  const [ date, setDate ] = useState('09-10-2000');
  const [ Email, setEmail ] = useState('')
  const [ Address, setAddress ] = useState('')
  const [ City, setCity ] = useState('')
  const [ Country, setCountry ] = useState('')
  const [ State_Province, setState_Province ] = useState('')
  const [ ZIP_PostalCode, setZIP_PostalCode ] = useState('')

  const setValue = (value) => {
    var newArray = value.filter((item)=>item.selected===true); //get the items that are selected
    setGenderValue(newArray[0].value); //set the selected value in this Hook
  };

  const handleSubmit = async () => {
    if (First_Name === '' || Last_Name === '' || GenderValue === '' || Mobile === '' || date === '' 
      || Email === '' || Address === '' || City === '' || Country === '' 
      || State_Province === '' || ZIP_PostalCode === '') {
        alert("All fields are required");
        return;
    }
    await axios.post("http://127.0.0.1:3000/Patients/AddNewPatients", { 
      First_Name, Last_Name, GenderValue, Mobile, date, Email, Address, 
      City, Country, State_Province, ZIP_PostalCode });
    alert("Add New Patient Successful");
    navigation.navigate('mainScreen')
};


    return (
      <KeyboardAwareScrollView>
        <View style = {stylesAP.container}>
            <TextInput
          placeholder = "First Name"
          style = {stylesAP.inputBox}
          value={First_Name}
          onChangeText={text => setFirst_Name(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder = "Last Name"
          style = {stylesAP.inputBox}
          value={Last_Name}
          onChangeText={text => setLast_Name(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <View style = {stylesAP.textdate}>
        <Text style = {stylesAP.text}>Gender</Text>
        <RadioGroup
        radioButtons={radioButtonsData} //pass in our array
        onPress={(value) => setValue(value)}
        value={GenderValue}
        layout='row'
      />
        </View>
        <TextInput
          placeholder = "Mobile"
          style = {stylesAP.inputBox}
          value={Mobile}
          onChangeText={text => setMobile(text)}
          autoCapitalize = "words"
          keyboardType = 'phone-pad'
        />
        <View style = {stylesAP.textdate}>
        <Text style = {stylesAP.text}>Date of Birth</Text>
          <DatePicker
          style = {stylesAP.datePickerStyle}
          date = {date} // Initial date from state
          placeholder = "Select date"
          format = "DD-MM-YYYY"
          minDate = "01-01-1900"
          maxDate = "01-01-2022"
          confirmBtnText = "Confirm"
          cancelBtnText = "Cancel"
          value={date}
          customStyles = {{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 0,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        </View>
        <TextInput
          placeholder = "Email"
          style = {stylesAP.inputBox}
          value={Email}
          onChangeText={text => setEmail(text)}
          autoComplete = "email"
          keyboardType = 'email-address'
        />
        <TextInput
          placeholder = "Address"
          style = {stylesAP.inputBox}
          value={Address}
          onChangeText={text => setAddress(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder = "City"
          style = {stylesAP.inputBox}
          value={City}
          onChangeText={text => setCity(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder = "Country"
          style = {stylesAP.inputBox}
          value={Country}
          onChangeText={text => setCountry(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder = "State / Province"
          style = {stylesAP.inputBox}
          value={State_Province}
          onChangeText={text => setState_Province(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />
        <TextInput
          placeholder = "ZIP / Postal Code"
          style = {stylesAP.inputBox}
          value={ZIP_PostalCode}
          onChangeText={text => setZIP_PostalCode(text)}
          autoCapitalize = "words"
          autoCorrect = {false}
        />

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
      fontSize: 18,
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
      fontSize: 18,
      marginVertical: 5,
      borderRadius: 2,
      backgroundColor: '#BDC0CB'
    },
    button: {
        marginVertical: 20,
        flexDirection: "row",
      },
      buttonContainer: {
        backgroundColor: "#5C78E9",
        marginHorizontal: 35,
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
      datePickerStyle: {
        width: 160,
        alignItems: "center",
        marginVertical: 15,
      },
  });