import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';


const Form = ({submitTasks}) => {
  
  const [task, setTask] = useState('');
  
  const changeHandler = (value) => {
    setTask(value)
  }
  
  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Add Tasks Here' 
        onChangeText={changeHandler} 
        keyboardType='default' />
      <Button 
        onPress={() => submitTasks(task) } 
        title='addButton' 
        color='salmon' />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 80,
    paddingVertical: 6,
    borderColor: '#777',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    textAlign: 'center',
    fontSize: 16,
  },

});
