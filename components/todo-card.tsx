'use client';

import { Todo } from '@/types/todo';
import { CheckSquare, Square } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type TodoProps = {
	todo: Todo;
};

export default function TodoCard({ todo }: TodoProps) {
	const { title, completed } = todo;
	return (
		<div className="flex shadow-2xl p-2 rounded-lg w-full lg:w-1/2 items-center">
			<Button
				variant={'link'}
				className="p-2">
				{completed ? (
					<CheckSquare
						onClick={() => console.log('clicked')}
						size={24}
						className="text-green-600"
					/>
				) : (
					<Square
						size={24}
						className="text-gray-600"
					/>
				)}
			</Button>
			<h2 className={cn(' text-gray-600', !completed && 'text-green-600')}>
				{title}
			</h2>
		</div>
	);
}
