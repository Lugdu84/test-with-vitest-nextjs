'use client';

import { useTodos } from '@/hooks/use-todos';
import TodoCard from './todo-card';

export default function TodosList() {
	const { todos } = useTodos({
		initialTodos: [{ title: 'Hello World', completed: false, id: 1 }],
	});
	return (
		<div className="w-full flex justify-center">
			{todos.map((todo) => (
				<TodoCard
					key={todo.id}
					todo={todo}
				/>
			))}
		</div>
	);
}
