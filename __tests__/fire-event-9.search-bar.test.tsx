import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/components/search-bar';

describe('test search bar', () => {
	let input: HTMLInputElement;
	let button: HTMLButtonElement;
	const value = 'react';
	const onSearch = vi.fn();

	beforeEach(() => {
		render(<SearchBar onSearch={onSearch} />);
		input = screen.getByRole('textbox');
		button = screen.getByRole('button');
	});

	it('should show clear button if input has value', () => {
		expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument();
		fireEvent.change(input, { target: { value: 'a' } });
		expect(screen.queryByTestId('clear-button')).toBeInTheDocument();
	});
	it('should clear input when click on clear button', () => {
		fireEvent.change(input, { target: { value } });
		expect(input).toHaveValue(value);
		fireEvent.click(screen.getByTestId('clear-button'));
		expect(input).toHaveValue('');
	});
	it('should call onSearch when click on search button', () => {
		fireEvent.change(input, { target: { value } });
		expect(input).toHaveValue(value);
		fireEvent.click(button);
		expect(onSearch).toHaveBeenCalledWith(value);
		expect(onSearch).toHaveBeenCalledTimes(1);
	});
});
