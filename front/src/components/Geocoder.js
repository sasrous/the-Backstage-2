import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { Component } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Fzcm91cyIsImEiOiJjamthMWVlYjMwaGR5M3F0NHZpMGhrOGM2In0.AnhPlCGlJIovaEzHuWr59Q'

class Geocoder extends Component {
  componentDidMount() {
    // mapRef is undefined on initial page load, so force an update to initialize geocoder
    this.forceUpdate()
  }

  componentDidUpdate() {
    if (this.geocoder !== undefined) {
      return
    }

    const { mapRef, mapboxApiAccessToken, options } = this.props

    this.geocoder = new MapboxGeocoder({ accessToken: mapboxApiAccessToken, ...options })
    this.geocoder.on('result', function(ev) {
      var search = ev.result.text
      console.log(search)

    })

    mapRef.current.getMap().addControl(this.geocoder)
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