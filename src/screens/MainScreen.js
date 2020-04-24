import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

const MainScren = ({ todos, addTodo, removeTodo }) => {
  return (
  	<View>
			<AddTodo onSubmit={addTodo} />

			<FlatList
				keyExtractor={item => item.id.toString()}
				data={todos}
				renderItem={({ item }) => (
					<Todo todo={item} onRemove={removeTodo} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default MainScren;