import React, { Component } from 'react';
import MapGL from 'react-map-gl';
// import Geocoder from 'react-map-gl-geocoder'
import Geocoder from './Geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Fzcm91cyIsImEiOiJjamthMWVlYjMwaGR5M3F0NHZpMGhrOGM2In0.AnhPlCGlJIovaEzHuWr59Q';

class Searchbar extends Component {
	state = {
		viewport: {
			width: 400,
			height: 400,
			latitude: 37.7577,
			longitude: -122.4376,
			zoom: 8
		}
	};

	mapRef = React.createRef();

	componentDidMount() {
		window.addEventListener('resize', this._resize.bind(this));
		this._resize();
	}

	_resize() {
		this._onViewportChange({
			width: window.innerWidth / 1.6,
			height: window.innerHeight / 4
		});
	}

	_onViewportChange = (viewport) => {
		this.setState({
			viewport: { ...this.state.viewport, ...viewport }
		});
	};

	render() {
		return (
			<div>
				<p>search</p>
				<div className="container-fluid">
					<MapGL
						ref={this.mapRef}
						{...this.state.viewport}
						onViewportChange={this._onViewportChange}
						mapboxApiAccessToken={MAPBOX_TOKEN}
					>
						<Geocoder
							mapRef={this.mapRef}
							onViewportChange={this._onViewportChange}
							mapboxApiAccessToken={MAPBOX_TOKEN}
							datafunc={this.props.datafunc}
						/>
					</MapGL>
				</div>
			</div>
		);
	}
}

export default Searchbar;
