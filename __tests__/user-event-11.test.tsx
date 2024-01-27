import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '@/components/search-bar';
import Counter from '@/components/counter';
import { setup } from './setup';

describe('userEvent', () => {
	it('render without setup', async () => {
		render(<Counter />);
		const plusButton = screen.getByRole('button', { name: '+' });
		const user = userEvent.setup();
		await user.click(plusButton);
		screen.getByText('1');
	});
	it('render with setup', async () => {
		const { user } = setup(<Counter />);
		const plusButton = screen.getByRole('button', { name: '+' });
		await user.click(plusButton);
		screen.getByText('1');
	});
	it('render SearchBar and type text', async () => {
		const onSearch = vi.fn();
		const { user } = setup(<SearchBar onSearch={onSearch} />);
		const input = screen.getByRole('textbox');
		await user.type(input, 'search');
		const buttonSearch = screen.getByRole('button', { name: 'Search' });
		await user.click(buttonSearch);
		expect(onSearch).toHaveBeenCalledWith('search');
		await user.clear(input);
		await user.type(input, 'new search');
		await user.click(buttonSearch);
		expect(onSearch).toHaveBeenCalledWith('new search');
	});
});

describe('firEvent', () => {
	it('type and retype in search bar with fireEvent', () => {
		const onSearch = vi.fn();
		render(<SearchBar onSearch={onSearch} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'search' } });
		const buttonSearch = screen.getByRole('button', { name: 'Search' });
		fireEvent.click(buttonSearch);
		expect(onSearch).toHaveBeenCalledWith('search');
		fireEvent.change(input, { target: { value: 'new search' } });
		fireEvent.click(buttonSearch);
		expect(onSearch).toHaveBeenCalledWith('new search');
	});
});
