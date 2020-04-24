import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import NavBar from './src/components/NavBar';
import MainScren from './src/screens/MainScreen';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title,
    }]);
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        <MainScren todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
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