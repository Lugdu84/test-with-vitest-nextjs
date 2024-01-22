import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, X } from 'lucide-react';

type SearchBarProps = {
	onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		if (query) {
			onSearch(query);
		}
	};

	const handleClear = () => {
		setQuery('');
	};

	return (
		<div className="flex gap-2 items-center w-full lg:w-1/2">
			<div className="flex items-center gap-2 m-2 relative w-full">
				<Search className="absolute left-2 text-gray-500" />
				<Input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className=" pl-10"
				/>
				{query && (
					<X
						data-testid="clear-button"
						role="button"
						className="absolute right-2 text-gray-500"
						onClick={handleClear}
					/>
				)}
			</div>
			<Button onClick={handleSearch}>Search</Button>
		</div>
	);
}
