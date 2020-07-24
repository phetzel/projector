import React from 'react';

class ShowMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.801447, lng: -122.263685 }, 
            zoom: 13
        };

        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
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
