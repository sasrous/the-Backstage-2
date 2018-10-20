import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: `https://api.songkick.com/api/3.0/`,
    })
  }

  getMetroArea(location) {
    return this.api.get(`/search/locations.json?query=${location}&apikey=PxrJ1AnxJlC6uT7i`)
  }

  getListEvents(metroArea) {
    return this.api.get(`metro_areas/${metroArea}/calendar.json?apikey=PxrJ1AnxJlC6uT7i&metro_area_id=${metroArea}`)
  }
  
}

const api = new Api();

export default api