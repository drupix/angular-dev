import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
// import 'leaflet/dist/leaflet.js';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit, AfterViewInit {

  // public type: ChartType = 'bar';
  private map;

  public lat: number;
  public long: number;
  public zoom: number;

  // public options: ChartOptions = {
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true
  //       }
  //     }]
  //   }
  // };

  constructor() { }

  ngOnInit(): void {
    // this.initMap();
    this.lat = 46.1912453;
    this.long = 6.1490980;
    this.zoom = 13;

  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // this.map = L.map('mapLeafletExample', {
    //   center: [ 39.8282, -98.5795 ],
    //   zoom: 13
    // });

    this.map = L.map('mapLeafletExample').setView([this.lat, this.long], this.zoom);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([this.lat, this.long]);
    marker.addTo(this.map).bindPopup('<h6>AngularDev</h6>by <a target="_blank" href="http://drupal-solutions.ch">drupal-solutions.ch</a>');

    // .openPopup();
  }
}
