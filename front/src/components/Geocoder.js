import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { Component } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import api from '../lib/api-service'

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Fzcm91cyIsImEiOiJjamthMWVlYjMwaGR5M3F0NHZpMGhrOGM2In0.AnhPlCGlJIovaEzHuWr59Q'

class Geocoder extends Component {

  state = {
    events: {},
    isLoading: true,
  }

  componentDidUpdate() {
    if (this.geocoder !== undefined) {
      return
    }

    let   getMetroarea = (location) => {
      api.getMetroArea(location)
      .then((result) => {
        let metroID = result.data.resultsPage.results.location[0].metroArea.id
        console.log(metroID)
        this.getListEvent(metroID);
      })
      .catch((error) => {
        console.log(error);
      })
    }



    const { mapRef, mapboxApiAccessToken, options } = this.props
    this.geocoder = new MapboxGeocoder({ accessToken: mapboxApiAccessToken, ...options })
    this.geocoder.on('result', function(ev) {

      var search = ev.result.text
      console.log(search)
      getMetroarea(search);
       
    })
    

    mapRef.current.getMap().addControl(this.geocoder)
  }

  getListEvent = (metroID) => {
    api.getListEvents(metroID)
      .then(({data}) => {
        const eventArray = data.resultsPage.results.event
        console.log("event list", eventArray) 
        this.setState({
          events : eventArray,
        });
        this.props.datafunc(this.state.events)
        
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getGeocoder() {
    return this.geocoder
  }

  render() {
    return null
  }


  static defaultProps = {
    mapboxApiAccessToken: MAPBOX_TOKEN
  }
}

export default Geocoder