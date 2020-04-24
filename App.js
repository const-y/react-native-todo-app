import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

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
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
        />

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