import type { RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { render } from '@testing-library/react';

export const setup = (
	jsx: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
) => {
	return {
		user: userEvent.setup(),
		...render(jsx, options),
	};
};
