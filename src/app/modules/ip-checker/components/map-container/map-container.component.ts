import { Component, OnInit } from '@angular/core';
import { LocationService } from 'app/services';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {
  icon = Leaflet.icon({
    iconUrl: '/assets/images/icon-location.svg',
  })
  loading = false
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    draggable: true,
    center: {
      lat: 51.1657,
      lng: 10.4515
    },
  }
  constructor(private locationService: LocationService) {

    this.locationService.searchResult.subscribe(returnedData => {
      this.onLocationFound(returnedData.location.lat, returnedData.location.lng)
    })

  }
  ngOnInit(): void {
    this.getCurrentLocation()

  }
  getCurrentLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.onLocationFound(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  onLocationFound(lat: any, lng: any) {
    this.generateMarker({ lat, lng })
    this.map.flyTo({ lat, lng }, this.options.zoom, {
      animate: true,
      duration: 0.5,
      noMoveStart: true,
    });
  }

  generateMarker(position: any) {
    return Leaflet.marker(position, { icon: this.icon }).addTo(this.map)
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
  }


}

