import React, { useState } from 'react';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import NavBar from './src/components/NavBar';
import MainScren from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';
import { THEME } from './src/theme';

async function loadFonts() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: '1', title: 'Изучить React Native' },
  ]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={e => console.error(e)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${todo.title}?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(item => item.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          return { ...todo, title };
        }

        return todo;
      })
    );
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
