import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { THEME } from '../theme';

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
			<Text>{todo.title}</Text> 
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
  }
});

export default TodoScreen;