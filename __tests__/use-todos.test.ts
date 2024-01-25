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

const thirdText = 'Learn React Testing Library';
const thirdTodo = {
	id: 3,
	title: thirdText,
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

describe('delete Todo', () => {
	it('can delete a todo if there are two todos', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo, secondTodo] })
		);
		act(() => {
			result.current.deleteTodoById(1);
		});
		expect(result.current.todos).toEqual([secondTodo]);
	});
	it('can delete a todo if there are two todos', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo, secondTodo] })
		);
		act(() => {
			result.current.deleteTodoById(2);
		});
		expect(result.current.todos).toEqual([firstTodo]);
	});
	it('can delete if there is only one todo, and return []', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo] })
		);
		act(() => {
			result.current.deleteTodoById(1);
		});
		expect(result.current.todos).toEqual([]);
	});
	it('can create todo with good datas after deleting one', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo, secondTodo] })
		);
		act(() => {
			result.current.deleteTodoById(1);
		});
		act(() => {
			result.current.addTodo(thirdText);
		});
		expect(result.current.todos).toEqual([secondTodo, thirdTodo]);
	});
});

describe('update todos', () => {
	it("don't upate todo if title is empty", () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo] })
		);
		const firstTodoUpdated = {
			...firstTodo,
			title: '',
		};
		act(() => {
			result.current.updateTodo(firstTodoUpdated);
		});
		expect(result.current.todos).toEqual([firstTodo]);
	});
	it("update todo if title isn't empty", () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo] })
		);
		const firstTodoUpdated = {
			...firstTodo,
			title: thirdText,
		};
		act(() => {
			result.current.updateTodo(firstTodoUpdated);
		});
		expect(result.current.todos).toEqual([firstTodoUpdated]);
	});
	it("update todo's to completed", () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo] })
		);
		const firstTodoUpdated = {
			...firstTodo,
			completed: true,
		};
		act(() => {
			result.current.updateTodo(firstTodoUpdated);
		});
		const toBeCompleted = result.current.todos[0].completed;
		expect(toBeCompleted).toBe(true);
		act(() => {
			result.current.updateTodo({
				...firstTodoUpdated,
				completed: !firstTodoUpdated.completed,
			});
		});
		const toBeCompletedAgain = result.current.todos[0].completed;
		expect(toBeCompletedAgain).toBe(false);
	});
	it('update with several todos, update only the first todo', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo, secondTodo] })
		);
		const firstTodoUpdated = {
			...firstTodo,
			title: thirdText,
		};
		act(() => {
			result.current.updateTodo(firstTodoUpdated);
		});
		expect(result.current.todos).toEqual([firstTodoUpdated, secondTodo]);
	});
	it('update with several todos, update only the second todo', () => {
		const { result } = renderHook(() =>
			useTodos({ initialTodos: [firstTodo, secondTodo] })
		);
		const secondTodoUpdated = {
			...secondTodo,
			title: thirdText,
		};
		act(() => {
			result.current.updateTodo(secondTodoUpdated);
		});
		expect(result.current.todos).toEqual([firstTodo, secondTodoUpdated]);
	});
});
