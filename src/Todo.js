import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Todo = ({ todo }) => {
  return (
    <View style={styles.root}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  }
});

export default Todo;
