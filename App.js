import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Form from './components/Form';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy Groceries', key: '1' },
    { text: 'Create new Apps', key: '2' },
  ]);

  // fucntion to handle the onPress in TodoItem.js 
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key); // filter the todo with key diff from key
    })
  };

  // function to add new todo is passed as a prop to Form.js
  const submitTasks = (task) => {
    if (task.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: task, key: Math.random().toString() },
          ...prevTodos
        ]
    });
    } else {
      Alert.alert('CAREFULL!', 'Tasks must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]); // alert elements are passed as an array 
    }}


  return (
    // <TouchableWithoutFeedback onPress={ () => {
    //   Keyboard.dismiss(); // dismiss keyboard when user clicks outside of the input field
    //   console.log('Keyboard dismissed');
    // }}>
      <View style={styles.container}>
        <Header/>
          <View style={styles.list}>
            <Form submitTasks ={submitTasks} /> 
              <View style={styles.flatlist}>
                <FlatList 
                  data={todos}
                  renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>  //distructure its a prop
                  )} />
              </View>
            <StatusBar style="auto" />
          </View>
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  flatlist: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
});