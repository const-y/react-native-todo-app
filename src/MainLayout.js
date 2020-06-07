import React, { useState, useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import NavBar from './components/NavBar';
import { THEME } from './theme';
import MainScren from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.wrapper}>
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
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
});

export default MainLayout;
