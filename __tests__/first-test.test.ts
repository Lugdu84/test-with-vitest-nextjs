const sum = (a: number, b: number) => a + b;
describe('First test', () => {
	it('should be 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
	it('should not be 4', () => {
		expect(sum(1, 2)).not.toBe(4);
	});
});
