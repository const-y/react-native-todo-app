import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const AddTodo = () => {
  return (
    <View style={styles.root}>
      <TextInput style={styles.input} />
      <Button title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});

export default AddTodo;
