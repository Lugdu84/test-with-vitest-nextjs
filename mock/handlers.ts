import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('http://server.com/hello-world', () => {
		return HttpResponse.text('Hello world');
	}),
	http.get('http://server.com/hello-world-2', () => {
		return HttpResponse.json({ message: 'Hello world 2' }, { status: 201 });
	}),
	http.get('http://server.com/user/:id', ({ params }) => {
		const { id } = params;
		return HttpResponse.json({ id, name: 'John' });
	}),
	http.get('http://server.com/get-request', ({ request, requestId }) => {
		console.log('request', request.url);
		console.log('requetid', requestId);
		return HttpResponse.json({ message: 'Hello world' });
	}),
	http.post('http://server.com/sign-in', async ({ request }) => {
		const { username, password } = (await request.json()) as {
			username: string;
			password: string;
		};
		if (username === 'john' && password === '123') {
			return HttpResponse.json({ message: 'Authenticated' });
		} else {
			return HttpResponse.json(
				{ message: 'Not authenticated' },
				{ status: 401 }
			);
		}
	}),
];
