describe('functions and mocks', () => {
	const getPrice = (amount: number) => amount * 10;
	const isOdd = (value: number) => value % 2 !== 0;

	it('should return 100 when amount is 10', () => {
		const result = getPrice(10);
		expect(result).toBe(100);
	});
	it('getPrice should have been called', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		expect(mock).toHaveBeenCalled();
	});
	it('getPrice should have been called 2 times', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		mock(20);
		expect(mock).toHaveBeenCalledTimes(2);
	});
	it('getPrice should have been called with 10', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		expect(mock).toHaveBeenCalledWith(10);
		expect(mock).not.toHaveBeenCalledWith(20);
	});
	it('getPrice should have been last times with 10', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		mock(20);
		expect(mock).toHaveBeenLastCalledWith(20);
		expect(mock).not.toHaveBeenLastCalledWith(10);
	});
	it('getPrice should have been calls with 10 2 times', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		mock(10);
		expect(mock).toHaveBeenNthCalledWith(1, 10);
		expect(mock).toHaveBeenNthCalledWith(2, 10);
		expect(mock).not.toHaveBeenNthCalledWith(3, 10);
	});
	it('getPrice should have been returned', () => {
		const mock = vi.fn(getPrice);
		const price = mock(10);
		expect(price).toBe(100);
		expect(mock).toHaveReturned();
	});
	it('getPrice should have been returned 2 times', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		mock(20);
		expect(mock).toHaveReturnedTimes(2);
	});
	it('getPrice should have been returned with 100', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		expect(mock).toHaveReturnedWith(100);
		expect(mock).not.toHaveReturnedWith(200);
	});
	it('getPrice should have been returned last times with 200', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		mock(20);
		expect(mock).toHaveLastReturnedWith(200);
		expect(mock).not.toHaveLastReturnedWith(100);
	});
	it('getPrice should have been returned 2 times with 100', () => {
		const mock = vi.fn(getPrice);
		mock(10);
		mock(10);
		expect(mock).toHaveNthReturnedWith(2, 100);
	});
	it('isOdd should return true when value is 3', () => {
		expect(3).toSatisfy(isOdd);
	});
	it('isOdd should return false when value is 4', () => {
		expect(4).not.toSatisfy(isOdd);
	});
});
