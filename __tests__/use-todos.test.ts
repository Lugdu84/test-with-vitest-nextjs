import { renderHook, act } from '@testing-library/react';
import { useTodos } from '../hooks/use-todos';

const firstText = 'Learn React';
const secondText = 'Learn TypeScript';
const firstTodo = {
	id: 1,
	title: firstText,
	completed: false,
};

const secondTodo = {
	id: 2,
	title: secondText,
	completed: false,
};

// useTodos({ initialTodos: [firstTodo, secondTodo] });
// useTodos()

describe('initialization of the useTodos hook', () => {
	it('byt default, should return an empty array of todos', () => {
		const { result } = renderHook(() => useTodos());
		expect(result.current.todos).toEqual([]);
	});
	it('return array of todos if called with an array of todos', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo, secondTodo] })
		);
		expect(result.current.todos).toEqual([firstTodo, secondTodo]);
	});
});

describe('add Todo', () => {
	it('can add a todo', () => {
		const { result } = renderHook(() => useTodos());
		act(() => {
			result.current.addTodo(firstText);
		});
		expect(result.current.todos).toEqual([firstTodo]);
	});
	it('can add multiple todos', () => {
		const { result } = renderHook(() => useTodos());
		act(() => {
			result.current.addTodo(firstText);
		});
		act(() => {
			result.current.addTodo(secondText);
		});
		expect(result.current.todos).toEqual([firstTodo, secondTodo]);
	});
});
