import { server } from '../mock/server';

describe('mock api ', () => {
	beforeAll(() => {
		server.listen();
	});

	afterAll(() => {
		server.close();
	});

	afterEach(() => {
		server.resetHandlers();
	});

	test('should return hello world', async () => {
		const response = await fetch('http://server.com/hello-world');
		const data = await response.text();
		expect(data).toEqual('Hello world');
	});
	test('should return hello world 2', async () => {
		const response = await fetch('http://server.com/hello-world-2');
		const data = await response.json();
		expect(data).toEqual({ message: 'Hello world 2' });
	});
	test('should return user id and name', async () => {
		const response = await fetch('http://server.com/user/5');
		const data = await response.json();
		console.log(data);
		expect(data).toEqual({ id: '5', name: 'John' });
	});
	test('should return get request', async () => {
		const response = await fetch('http://server.com/get-request');
		const data = await response.json();
		expect(data).toEqual({ message: 'Hello world' });
	});
	test('should return authenticated', async () => {
		const response = await fetch('http://server.com/sign-in', {
			method: 'POST',
			body: JSON.stringify({ username: 'john', password: '123' }),
		});
		const data = await response.json();
		expect(data).toEqual({ message: 'Authenticated' });
	});
	test('should return not authenticated', async () => {
		const response = await fetch('http://server.com/sign-in', {
			method: 'POST',
			body: JSON.stringify({ username: 'john', password: '1234' }),
		});
		const data = await response.json();
		expect(data).toEqual({ message: 'Not authenticated' });
	});
});
