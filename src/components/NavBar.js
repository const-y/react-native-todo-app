import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './ui/AppTextBold';

const NavBar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.root,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.select({ android: 'white', ios: THEME.MAIN_COLOR }),
    fontSize: 20,
  },
});

export default NavBar;
