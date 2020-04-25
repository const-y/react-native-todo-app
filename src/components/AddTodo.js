import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../theme';

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  }

  return (
    <View style={styles.root}>
      <TextInput 
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название дела"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button 
        title="Добавить"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  }
});

export default AddTodo;
