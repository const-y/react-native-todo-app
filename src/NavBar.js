import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBar = ({ title }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 70,
    alignItems: 'center',
    backgroundColor: '#3949ab',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});

export default NavBar;
