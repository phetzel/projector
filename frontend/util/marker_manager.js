export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(shows) {
        const showsObj = {};
        shows.forEach(show => showsObj[show.id] = show);

        shows
            .filter(show => !this.markers[show.id])
            .forEach(newShow => this.createMarkerFromShow(newShow))

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
        })

        this.markers[marker.showId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.showId].setMap(null);
        delete this.markers[marker.showId];
    }
}