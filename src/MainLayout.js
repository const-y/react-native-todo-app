import React, { useState, useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import NavBar from './components/NavBar';
import { THEME } from './theme';
import MainScren from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { TodoContext } from './context/todo/TodoContext';

const MainLayout = () => {
  const { todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext);
  const [todoId, setTodoId] = useState(null);
  // const [todos, setTodos] = useState([]);

  // const addTodo = title => {
  //   setTodos(prev => [
  //     ...prev,
  //     {
  //       id: Date.now().toString(),
  //       title: title,
  //     },
  //   ]);
  // };

  // const removeTodo = id => {
  //   const todo = todos.find(t => t.id === id);

  //   Alert.alert(
  //     'Удаление элемента',
  //     `Вы уверены, что хотите удалить ${todo.title}?`,
  //     [
  //       {
  //         text: 'Отмена',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos(prev => prev.filter(item => item.id !== id));
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  // const updateTodo = (id, title) => {
  //   setTodos(old =>
  //     old.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, title };
  //       }

  //       return todo;
  //     })
  //   );
  // };

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
        onRemove={removeTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={THEME.MAIN_COLOR} />
      <NavBar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});

export default MainLayout;
