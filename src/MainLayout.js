import React, { useState, useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import NavBar from './components/NavBar';
import { THEME } from './theme';
import MainScren from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

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

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={THEME.MAIN_COLOR} />
      <NavBar title="Todo App" />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScren />}
      </View>
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
