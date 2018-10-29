import axios from 'axios';

class EventApi {
  constructor() {
    this.eventApi = axios.create({
      baseURL: 'http://localhost:5000',
    })
  }


  getEvent(id) {
    return this.eventApi.get(`/eventApi/:${id}`);
  }

  createEvent(id) {
    return this.eventApi.post(`/eventApi/:${id}`);
  }

  editEvent(id, body) {
    return this.eventApi.put(`/eventApi/:${id}`, body);
  }
}

const eventApi = new EventApi();

export default eventApi;