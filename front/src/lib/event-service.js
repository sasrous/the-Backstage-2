import axios from 'axios';

class EventApi {
	constructor() {
		this.eventApi = axios.create({
			baseURL: 'https://thebackstage2.herokuapp.com/',
			withCredentials: true
		});
	}

	getEvent(id) {
		return this.eventApi.get(`/eventApi/${id}`);
	}

	createEvent(id) {
		return this.eventApi.post(`/eventApi/${id}`);
	}

	editEvent(id, body) {
		return this.eventApi.put(`/eventApi/${id}`, body);
	}
}

const eventApi = new EventApi();

export default eventApi;
