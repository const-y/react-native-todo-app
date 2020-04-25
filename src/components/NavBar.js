import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';

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
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});

export default NavBar;
