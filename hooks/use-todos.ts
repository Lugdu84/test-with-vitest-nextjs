import { Todo } from '@/types/todo';
import { useState } from 'react';

type UseTodosProps = {
	initialTodos?: Todo[];
};

export const useTodos = ({ initialTodos = [] }: UseTodosProps = {}) => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos);
	const addTodo = (title: string) => {
		const newTodo = {
			id: todos.length + 1,
			title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	return {
		todos,
		addTodo,
	};
};
