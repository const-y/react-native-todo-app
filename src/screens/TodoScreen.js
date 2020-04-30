import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { THEME } from '../theme';
import AppCard from '../components/ui/AppCard';

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Ред." />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button 
            title='Назад'
            onPress={goBack}
            color={THEME.GRAY_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={goBack}
          />
        </View>
        
      </View>
    </View>
	)
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: '40%',
  },

  title: {
    fontSize: 20
  },

  card: {
    marginBottom: 20,
  }
});

export default TodoScreen;