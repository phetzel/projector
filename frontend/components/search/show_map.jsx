import React from 'react';

import MarkerManager from '../../util/marker_manager';

class ShowMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.801447, lng: -122.263685 }, 
            zoom: 13
        };

        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.shows);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.shows);
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
    }

    render() {
        return (
            <div className="map-container" ref="map">
                <div ref={map => this.mapNode = map} /> 
            </div>
        )
    }
}

export default ShowMap;
