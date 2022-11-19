import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';

const tableData = {
  tableHead: ['ID', 'Name', 'Address', 'Mobile', 'Email'],
  tableData: [
    ['1', 'Juan Gonzalez', '12 Malta', '(647) 321 4355', 'Ex@gmail.com'],
    ['2', 'Alberto Perez', '32 Kennedy', '(647) 832 5463', 'Ex@gmail.com'],
    ['3', 'Pedro Salas', '6 Kingston', '(647) 123 2632', 'Ex@gmail.com'],
  ],
};
export default function View_Patient_Records({navigation}) {
  const [data, setData] = useState(tableData);
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: 'teal' }}>
        <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={data.tableData} textStyle={styles.text} />
      </Table>


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