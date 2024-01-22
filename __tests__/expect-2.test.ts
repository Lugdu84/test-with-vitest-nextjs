describe('expect = assertion', () => {
	const result = 2;
	const object1 = {
		name: 'john doe',
		age: 25,
	};
	const object2 = object1;
	const object3 = { ...object1 };

	it('test with api jest', () => {
		expect.soft(result).toBe(2);
		expect(result).toBe(2);
	});
	it('test with chai api', () => {
		expect(result).to.equal(2);
	});
	it('test with not to be', () => {
		expect(result).not.toBe(3);
	});
	it('test reference', () => {
		expect(object1).toBe(object2);
	});
	it('test object with not.toBe, be careful !', () => {
		expect(object1).not.toBe(object3);
	});
	it('test 0.2 + 0.1 is not equal with toBe', () => {
		expect(0.2 + 0.1).not.toBe(0.3);
	});
	it('test 0.2 + 0.1 is equal with toBeCloseTO', () => {
		expect(0.2 + 0.1).toBeCloseTo(0.3);
	});
});
