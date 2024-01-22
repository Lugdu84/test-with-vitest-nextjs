import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '@/components/counter';

describe('Queries 8', () => {
	it('render a composant and show screen.debug', () => {
		render(<Counter />);
	});
	it("get button - with getByRole('button')", () => {
		render(<Counter />);
		screen.getByRole('button', { name: '-' });
		// click on button
		// etc
	});
	it("get button by text - with getByText('text')", () => {
		render(<Counter />);
		screen.getByText('-');
		// click on button
		// etc
	});
	it("get button with queryByRole('button')", () => {
		render(<Counter />);
		const button = screen.queryByRole('button', { name: '-' });
		expect(button).toBeInTheDocument();
		// click on button
		// etc
	});
	it("get button with findByRole('button')", async () => {
		render(<Counter />);
		const button = await screen.findByRole('button', { name: '-' });
		expect(button).toBeInTheDocument();
		// click on button
		// etc
	});
	it("get all buttons with getAllByRole('button')", () => {
		render(<Counter />);
		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(3);
		// click on button
		// etc
	});
	it("get all buttons with queryAllByRole('button')", () => {
		render(<Counter />);
		const buttons = screen.queryAllByRole('button');
		expect(buttons).toHaveLength(3);
		// click on button
		// etc
	});
	it("get all buttons with findAllByRole('button')", async () => {
		render(<Counter />);
		const buttons = await screen.findAllByRole('button');
		expect(buttons).toHaveLength(3);
		// click on button
		// etc
	});
});
