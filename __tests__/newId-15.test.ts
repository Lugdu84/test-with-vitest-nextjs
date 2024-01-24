import { newId } from '../lib/functions';

describe('test newId function', () => {
	it('should return 1 if empty array', () => {
		expect(newId([])).toBe(1);
	});
	it('should return 2 if array with 1', () => {
		expect(newId([1])).toBe(2);
	});
	it('should return 3 if array with 1, 2', () => {
		expect(newId([1, 2])).toBe(3);
	});
	it('should return 4 if there are 2 ids with 1, 3', () => {
		expect(newId([1, 3])).toBe(4);
	});
	it('should return 6, if only one id is 5', () => {
		expect(newId([5])).toBe(6);
	});
});
