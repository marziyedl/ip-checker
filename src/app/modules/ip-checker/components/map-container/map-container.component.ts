import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: 28.626137, lng: 79.821603 }
  }
  constructor() {
  }
  ngOnInit(): void {
    this.getCurrentLocation()
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.initMarkers(position.coords.latitude, position.coords.longitude)
          },
          (error) => {
            console.log(error)
          }
        );
      }
    }
  }

  initMarkers(lat: number, lng: number) {
    const initialMarkers =
    {
      position: { lat: lat, lng: lng },
      draggable: true
    }
    const data = initialMarkers;
    const marker = this.generateMarker(data);
    marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
    this.map.panTo(data.position);
    this.markers.push(marker)

  }
  onLocationFound(lat: any, lng: any) {
    this.map.flyTo({ lat, lng }, this.options.zoom, {
      animate: true,
      duration: 0.9,
      noMoveStart: true
    });
  }

  generateMarker(data: any) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event))
      .on('dragend', (event) => this.markerDragEnd(event));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;

  }

  mapClicked($event: any) {
    // console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any) {
    // console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any) {
    //console.log($event.target.getLatLng());
  }
}

