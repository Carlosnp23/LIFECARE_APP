import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList} from "react-native";
import axios from "axios";


export default function View_Patient_Records({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [text, setName] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/Patients/findAllPatients');
      const json = await response.json();
      setData(json.Patients);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);


  return (
    
    <View style={styles.container}>

      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.First_Name}, {item.Last_Name}, {item.Address}, {item.Mobile}, {item.Email}</Text>
          )}
        />
      )}

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('mainScreen')}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )


}
const styles = StyleSheet.create({
  container: { flex: 0, padding: 3, justifyContent: 'center', backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#EEEEEE' },
  headText: { fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: 'black' },
  text: {
    margin: 7, fontSize: 13, fontWeight: 'bold', textAlign: 'center',
  },
  button: {
    marginVertical: 20,
  },
  buttonContainer: {
    backgroundColor: "#5C78E9",
    marginHorizontal: 70,
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
})