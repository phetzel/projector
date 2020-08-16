import { displayTimeDay } from './data_util';

export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(shows) {
        const showsObj = {};
        shows.forEach(show => showsObj[show.id] = show);

        shows
            .filter(show => !this.markers[show.id])
            .forEach(newShow => this.createMarkerFromShow(newShow, this.handleClick))

        Object.keys(this.markers)
            .filter(showId => !showsObj[showId])
            .forEach((showId) => this.removeMarker(this.markers[showId]))
    }

    createMarkerFromShow(show) {
        const position = new google.maps.LatLng(show.lat, show.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            showId: show.id
        });

        const infoContent = 
            '<div id="info-content">' +
                `<h6>${show.movie.title}</h6>` +
                `<p>${displayTimeDay(show.time)}` +
                `<p>${show.address}` +
            '</div>'

        const infoWindow = new google.maps.InfoWindow({
            content: infoContent,
            map: this.map
        });

        marker.addListener('mouseover', function () {
            infoWindow.open(this.map, this);
        });
        marker.addListener('mouseout', function () {
            infoWindow.close();
        });

        marker.addListener('click', () => this.handleClick(show));
        this.markers[marker.showId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.showId].setMap(null);
        delete this.markers[marker.showId];
    }
}