import { Todo } from '@/types/todo';
import React from 'react';

type TodoViewProps = {
	todo: Todo;
};

export default function TodoView({ todo }: TodoViewProps) {
	return (
		<div className="w-full flex shadow-2xl border border-gray-200 rounded-lg p-2">
			<h2>{todo.title}</h2>
		</div>
	);
}
