import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import NavBar from './src/components/NavBar';
import MainScren from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

const App = () => {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: '1', title: 'Изучить React Native' },
    { id: '2', title: 'Написать приложение' },
  ]);

  const addTodo = title => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title,
    }]);
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  let content = (
    <MainScren 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      openTodo={setTodoId} 
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);

    content = (
      <TodoScreen
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
      />
    );
  }

  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        {content}
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