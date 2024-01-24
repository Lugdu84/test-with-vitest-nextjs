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

	return {
		todos,
		addTodo,
		deleteTodoById,
	};
};
