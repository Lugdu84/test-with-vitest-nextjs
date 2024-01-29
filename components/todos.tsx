'use client';

import { useTodos } from '@/hooks/use-todos';
import TodoView from './todo';

export default function AllTodosView() {
	const { todos } = useTodos({
		initialTodos: [{ id: 1, title: 'test', completed: false }],
	});
	console.log(todos);
	return (
		<div className="flex w-full md:w-1/2">
			{todos.map((todo) => {
				return (
					<TodoView
						key={todo.id}
						todo={todo}
					/>
				);
			})}
		</div>
	);
}
