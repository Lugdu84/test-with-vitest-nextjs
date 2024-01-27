import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/components/search-bar';

describe('learn how to fire events', () => {
	let input: HTMLInputElement;
	let button: HTMLButtonElement;
	const value = 'react';
	const onSearch = vi.fn();
	beforeEach(() => {
		render(<SearchBar onSearch={onSearch} />);
		input = screen.getByRole('textbox');
		button = screen.getByRole('button');
	});
	it('shoud click on button', () => {
		fireEvent.change(input, { target: { value } });
		expect(input).toHaveValue(value);
		fireEvent.click(button);
		expect(onSearch).toHaveBeenCalledWith(value);
	});
	it('should clear input', () => {
		expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument();
		fireEvent.change(input, { target: { value: 'a' } });
		expect(screen.queryByTestId('clear-button')).toBeInTheDocument();
	});
});
