import { Button } from '@/components/ui/button';
import { useCounter } from '@/hooks/use-counter';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';

type CounterProps = {
	maxValue?: number;
	initialValue?: number;
	initialStep?: number;
};

export default function Counter({
	maxValue,
	initialValue,
	initialStep,
}: CounterProps) {
	const {
		count,
		step,
		increment,
		decrement,
		canIncrement,
		canDecrement,
		reset,
		changeStep,
	} = useCounter({
		maxValue,
		initialValue,
		initialStep,
	});
	return (
		<div className="flex flex-col border shadow-xl p-4 w-64 justify-center gap-4">
			<h2>Notre super compteur !</h2>
			<Button onClick={reset}>Reset</Button>
			<div className="flex gap-2 items-center">
				<Label
					className="w-1/3"
					htmlFor="current-step">
					Step :
				</Label>
				<Input
					type="number"
					name="step"
					min={1}
					max={10}
					value={step}
					onChange={(e) => changeStep(Number(e.target.value))}
				/>
			</div>
			<div className="flex items-center justify-evenly mt-2">
				<Button
					disabled={!canDecrement}
					onClick={decrement}>
					-
				</Button>
				<span className="text-2xl">{count}</span>
				<Button
					disabled={!canIncrement}
					onClick={increment}>
					+
				</Button>
			</div>
		</div>
	);
}
