import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './ui/AppTextBold';

const NavBar = ({ title }) => {
  return (
    <View style={styles.root}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
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
