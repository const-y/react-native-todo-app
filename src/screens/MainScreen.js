import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

const MainScren = ({ todos, addTodo, removeTodo, openTodo }) => {
	let content = (
		<FlatList
				keyExtractor={item => item.id.toString()}
				data={todos}
				renderItem={({ item }) => (
					<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
			)}
		/>
	);

	if (todos.length === 0) {
		content = (
		<View style={styles.imgWrap}>
			<Image
				style={styles.image} 
				source={require('../../assets/no-items.png')}
			/>
		</View>
	)
	}
	
	return (
  	<View>
			<AddTodo onSubmit={addTodo} />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 300,
		padding: 10,
	},

	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	}
});

export default MainScren;