import { Todo } from '@/types/todo';
import { useState } from 'react';

export const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
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
