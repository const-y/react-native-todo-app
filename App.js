import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/NavBar';

const App = () => (
  <View style={styles.container}>
    <NavBar title="Todo App" />
  </View>
);

const styles = StyleSheet.create({

});

export default App;