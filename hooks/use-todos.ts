import { newId } from '../lib/functions';
import { Todo } from '@/types/todo';
import { useState } from 'react';

type UseTodosProps = {
	initialTodos?: Todo[];
};

export const useTodos = ({ initialTodos = [] }: UseTodosProps = {}) => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos);
	const addTodo = (title: string) => {
		const newTodo = {
			id: newTodosId(),
			title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const newTodosId = () => {
		const ids = todos.map((todo) => todo.id);
		return newId(ids);
	};

	const deleteTodoById = (id: number) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const updateTodo = (todo: Todo) => {
		if (todo.title === '') return;
		const newTodos = todos.map((t) => {
			if (t.id === todo.id) {
				return todo;
			}
			return t;
		});
		setTodos(newTodos);
	};

	const toggleTodo = (id: number) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(newTodos);
	};

	return {
		todos,
		addTodo,
		deleteTodoById,
		updateTodo,
		toggleTodo,
	};
};
