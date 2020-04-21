import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title,
    }]);
  }

  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});

export default App;