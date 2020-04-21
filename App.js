import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';

const App = () => (
  <View>
    <NavBar title="Todo App" />
    <View style={styles.container}>
      <AddTodo />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});

export default App;