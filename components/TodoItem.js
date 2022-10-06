import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.todoitem}>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  todoitem: {
    padding: 10,
    marginTop: 10,
    borderColor: 'silver',
    borderWidth: 2,
    borderStyle: 'inset',
    borderRadius: 10,
    boxShadow: '3px 3px 7px grey',
  }
});