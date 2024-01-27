// Tests du composant Counter
import Counter from '@/components/counter';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test du composant Counter avec les valeurs par défauts', () => {
	// Vous pouvez utiliser un beforeEach pour éviter de répéter le code
	let minusButton: HTMLButtonElement;
	let plusButton: HTMLButtonElement;

	beforeEach(() => {
		render(<Counter />);
		minusButton = screen.getByRole('button', { name: '-' });
		plusButton = screen.getByRole('button', { name: '+' });
	});
	it('Le composant est initialisé. O est affiché (la valeur par défaut pour notre compteur).', () => {
		// Avec toBeInTheDocument, on vérifie que le composant est bien dans le DOM
		const counterValue = screen.queryByText('0');
		expect(counterValue).toBeInTheDocument();
	});
	it('Si on incremente, 1 est affiché', () => {
		fireEvent.click(plusButton);
		screen.getByText('1');
	});
	it("Si on incremente deux fois, puis qu'on décremente une fois, 1 est affiché", () => {
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		fireEvent.click(minusButton);
		screen.getByText('1');
	});
	it('On ne peut pas descendre en dessous de 0, Si on est déjà à 0, le bouton "-" doit être "disabled"', () => {
		expect(minusButton).toBeDisabled();
	});
	it('Si on modifie le step à 2, on incremente de 2 (ça affiche 2) et on décremente de 2 (ça affiche 0)', () => {
		const stepButton = screen.getByRole('spinbutton');
		fireEvent.change(stepButton, { target: { value: '2' } });
		fireEvent.click(plusButton);
		screen.getByText('2');
		fireEvent.click(minusButton);
		screen.getByText('0');
	});
	it('Si on clique sur le bouton reset, count est réinitialisé à 0', () => {
		fireEvent.click(plusButton);
		screen.getByText('1');
		const resetButton = screen.getByRole('button', { name: 'Reset' });
		fireEvent.click(resetButton);
		screen.getByText('0');
	});
});

describe('Le composant Counter est initialisé avec une valeur maximum de 3 (maxValue)', () => {
	it('Si on clique 3 fois sur increment, le bouton "+" doit être "disabled", car on a atteint la valeur maximum', () => {
		render(<Counter maxValue={3} />);
		const plusButton = screen.getByRole('button', { name: '+' });
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		expect(plusButton).toBeDisabled();
	});
});

describe('Le composant Counter est initialisé avec une valeur maximum de 10 (maxValue) et une valeur initiale de 6', () => {
	let plusButton: HTMLButtonElement;
	beforeEach(() => {
		render(
			<Counter
				maxValue={10}
				initialValue={6}
			/>
		);
		plusButton = screen.getByRole('button', { name: '+' });
	});
	it('La valeur du compteur est initialisée à 6', () => {
		screen.getByText('6');
	});
	it("Si on clique 4 fois sur le bouton increment, le bouton '+' doit être 'disabled', car on a atteint la valeur maximum", () => {
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		expect(plusButton).toBeDisabled();
	});
	it("Si on clique 2 fois sur le bouton increment, et qu'on reset, la valeur du compteur est réinitialisée à 6", () => {
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);
		screen.getByText('8');
		const resetButton = screen.getByRole('button', { name: 'Reset' });
		fireEvent.click(resetButton);
		screen.getByText('6');
	});
});

describe('Le composant Counter est initialisé avec une valeur maximum de 12 (maxValue), une valeur initiale de 6 et un step de 5', () => {
	let plusButton: HTMLButtonElement;
	let minusButton: HTMLButtonElement;
	beforeEach(() => {
		render(
			<Counter
				maxValue={12}
				initialValue={6}
				initialStep={5}
			/>
		);
		plusButton = screen.getByRole('button', { name: '+' });
		minusButton = screen.getByRole('button', { name: '-' });
	});
	it('Si on clique sur le bouton increment, la valeur du compteur est incrémentée de 5 et on affiche 11. Le bouton "+" doit être "disabled"', () => {
		fireEvent.click(plusButton);
		screen.getByText('11');
		expect(plusButton).toBeDisabled();
	});
	it('Si on clique sur le bouton decrement, le bouton "-" doit être disabled', () => {
		fireEvent.click(minusButton);
		expect(minusButton).toBeDisabled();
	});
});
describe('Le composant Counter est initialisé avec une valeur maximum de 10 (maxValue), une valeur initiale de 5 et un step de 5', () => {
	beforeEach(() => {
		render(
			<Counter
				maxValue={10}
				initialValue={5}
				initialStep={5}
			/>
		);
	});
	it('Si on clique sur le bouton increment, la valeur du compteur est incrémentée de 5 (ça affiche 10), le bouton "+" doit être "disabled"', () => {
		const plusButton = screen.getByRole('button', { name: '+' });
		fireEvent.click(plusButton);
		screen.getByText('10');
		expect(plusButton).toBeDisabled();
	});
	it('Si on clique sur le bouton decrement, ça affiche 0 et le bouton "-" doit être disabled', () => {
		const minusButton = screen.getByRole('button', { name: '-' });
		fireEvent.click(minusButton);
		screen.getByText('0');
		expect(minusButton).toBeDisabled();
	});
});
