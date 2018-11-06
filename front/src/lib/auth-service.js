import axios from 'axios';

class Auth {
	constructor() {
		this.auth = axios.create({
			baseURL: 'https://thebackstage2.herokuapp.com/',
			withCredentials: true
		});
	}

	signup(user) {
		const { username, password } = user;
		return this.auth.post('/auth/signup', { username, password }).then(({ data }) => data);
	}

	login(user) {
		const { username, password } = user;
		return this.auth.post('/auth/login', { username, password }).then(({ data }) => data);
	}

	logout() {
		return this.auth.post('/auth/logout', {}).then((response) => response.data);
	}
	edit(body) {
		return this.auth.put('/auth/edit', body).then((response) => response.data);
	}

	me(user) {
		return this.auth.get('/auth/me', user).then((response) => response.data);
	}
	check(body) {
		return this.auth.put('/auth/check', body).then((response) => response.data);
	}
	join(body) {
		return this.auth.put('/auth/join', body).then((response) => response.data);
	}
	delete(body) {
		return this.auth.put('/auth/delete', body).then((response) => response.data);
	}
	getUser(id) {
		return this.auth.get(`/auth/${id}`).then((response) => response.data);
	}
}

const auth = new Auth();

export default auth;
