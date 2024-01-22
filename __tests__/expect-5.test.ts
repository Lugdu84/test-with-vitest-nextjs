describe('expect-5, arrays', () => {
	it('array should contain values', () => {
		const array = [1, 2, 3, 4, 5];
		expect(array).toContain(3);
		expect(array).not.toContain(9);
	});
	it('array of objects should contain object with property', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		expect(array).toContainEqual({ a: 2 });
		expect(array).not.toContainEqual({ a: 4 });
	});
	it('array should havec length', () => {
		const array = [1, 2, 3, 4, 5];
		expect(array).toHaveLength(5);
		expect(array).not.toHaveLength(4);
	});
	it('azerty should have length of 6', () => {
		expect('azerty').toHaveLength(6);
		expect('azerty').not.toHaveLength(5);
	});
	it('object with length property should have length', () => {
		const object = { length: 5, a: 1 };
		expect(object).toHaveLength(5);
		expect(object).not.toHaveLength(4);
	});
	it('object should have property', () => {
		const object = { lastName: 'Doe', firstName: 'John' };
		expect(object).toHaveProperty('lastName');
		expect(object).not.toHaveProperty('age');
	});
	it('azerty match with string', () => {
		expect('azerty').toMatch('erty');
		expect('azerty').not.toMatch('te');
	});
	it('azerty match with regex', () => {
		expect('azerty').toMatch(/erty/);
		expect('azerty').not.toMatch(/te/);
		expect('Azerty').toMatch(/erty/i);
	});
	it('object should match with object', () => {
		const object = { lastName: 'Doe', firstName: 'John' };
		expect(object).toMatchObject({ lastName: 'Doe' });
	});
	it('arrays of objects should match with array of objects', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		expect(array).toMatchObject([{ a: 1 }, { a: 2 }, { a: 3 }]);
	});
});
