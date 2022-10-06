import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const Header = () => {
  return (
    <View style={styles.header} >
        <Text style={styles.bold}>TASKS TODO List</Text>
    </View>

)}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'salmon',
    padding: 10,
    height: 50,
    paddingTop: 12,
    width: '100%',
  },
  bold: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 22,
    color: 'white',
  },
});