import React from 'react';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class ShowMap extends React.Component {
    componentDidMount() {
        const { single, shows, showId, fetchShow, fetchMovies } = this.props;

        let mapOptions;
        if (single) {
            const lat = new URLSearchParams(this.props.location.search).get('lat');
            const lng = new URLSearchParams(this.props.location.search).get('lng');

            mapOptions = {
                center: { lat: parseFloat(lat), lng: parseFloat(lng) },
                zoom: 13,
                draggable: false,
                zoomControl: true
            }
        } else {
            mapOptions = {
                center: { lat: 37.801447, lng: -122.263685 },
                zoom: 13
            };
        }

        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

        if (single) {
            fetchShow(showId);
        } else {
            fetchMovies();
            this.registerListeners();
            this.MarkerManager.updateMarkers(shows);
        }
    }

    componentDidUpdate() {
        if (this.props.single) {
            const showKey = Object.keys(this.props.shows)[0];
            const show = this.props.shows[showKey];
            this.MarkerManager.updateMarkers([show]);
        } else {
            this.MarkerManager.updateMarkers(this.props.shows);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        })
        
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        })
    }

    handleClick(coords) {
        this.props.history.push({
            pathname: 'shows/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    handleMarkerClick(show) {
        if (!this.props.single) {
            this.props.history.push({
                pathname: `shows/${show.id}`,
                search: `lat=${show.lat}&lng=${show.lng}`,
                lat: `${show.lat}`,
                lng: `${show.lng}`
            });
        }
    }

    render() {
        return (
            <div className="map-container" ref="map">
                <div ref={map => this.mapNode = map} /> 
            </div>
        )
    }
}

export default withRouter(ShowMap);
