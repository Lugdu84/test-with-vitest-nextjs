describe('expect-4 : comparators', () => {
	it('10 is greater than 5', () => {
		expect(10).toBeGreaterThan(5);
	});
	it('10 is greater than or equal to 10', () => {
		expect(10).toBeGreaterThanOrEqual(10);
	});
	it('10 is less than 20', () => {
		expect(10).toBeLessThan(20);
	});
	it('10 is less than or equal to 10', () => {
		expect(10).toBeLessThanOrEqual(10);
	});
	it('primitive types are equal', () => {
		expect(10).toBe(10);
	});
	it('object types are equal with toBe', () => {
		const obj = { a: 10 };
		const obj2 = obj;
		expect(obj).toBe(obj2);
	});
	it('object types are equal with toEqual', () => {
		const obj = { a: 10 };
		const obj2 = obj;
		expect(obj).toEqual(obj2);
		const obj3 = { ...obj };
		expect(obj).toEqual(obj3);
	});
});
