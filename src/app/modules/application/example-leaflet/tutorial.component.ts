import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-example-leaflet',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  optionsSpec: any = {
    layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
    zoom: 11,
    center: [46.1912453, 6.1490980]
  };
  zoom = this.optionsSpec.zoom;
  center = latLng(this.optionsSpec.center);

  // Marker for the top of Mt. Ranier
  popup = marker(this.optionsSpec.center, {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png',
      popupAnchor: [ 0, -41 ]
    })
  })
  .bindPopup('<h6>AngularDev</h6>by <a target="_blank" href="http://drupal-solutions.ch">drupal-solutions.ch</a>');

  options = {
    layers: [
      tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution }),
      this.popup,
    ],
    zoom: this.optionsSpec.zoom,
    center: latLng(this.optionsSpec.center),
    marker: marker(this.optionsSpec.center),
  };

  constructor() { }

  ngOnInit(): void {
  }

}
