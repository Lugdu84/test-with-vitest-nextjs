// initial value 0 by default
// iniital step 1 by default
// increment (step 1 by default)
// decrement (step 1 by default)
// not decrement below 0
// init with initial value
// init with initial step
// init with initial value and step
// reset (initial value)
// change step

import { useState } from 'react';

// new feature

type UseCounterProps = {
	initialValue?: number;
	initialStep?: number;
	maxValue?: number;
};

export const useCounter = ({
	initialValue = 0,
	initialStep = 1,
	maxValue,
}: UseCounterProps = {}) => {
	const [count, setCount] = useState(initialValue);
	const [step, setStep] = useState(initialStep);

	const increment = () => {
		if (maxValue) {
			if (count === maxValue) return;
			setCount(Math.min(count + step, maxValue));
			return;
		}
		setCount(count + step);
	};
	const decrement = () => setCount(Math.max(count - step, 0));
	const changeStep = (newStep: number) => setStep(newStep);
	const reset = () => setCount(initialValue);
	const canIncrement = maxValue ? step <= maxValue - count : true;
	const canDecrement = count - step >= 0;

	return {
		count,
		step,
		increment,
		canIncrement,
		decrement,
		canDecrement,
		changeStep,
		reset,
	};
};
