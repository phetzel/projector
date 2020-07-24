export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(shows) {
        shows
            .filter(show => !this.markers[show.id])
            .forEach(newShow => this.createMarkerFromShow(newShow))
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
}