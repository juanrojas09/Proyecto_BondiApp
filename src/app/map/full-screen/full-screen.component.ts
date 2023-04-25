import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HomeServicesService } from 'src/app/homepage/home-services.service';
import { environments } from 'src/environments/enviroments';
import { MapServicesService } from '../map-services.service';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css'],
  styles:[
     
  ]
})
export class FullScreenComponent {



  constructor(private hs: HomeServicesService, private ms: MapServicesService) { }

  ngOnInit() {
    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Inicializar el mapa
      this.ms.initMap('mapa', lat, lng);

      
     
    });
  }
  /*
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  //generar arreglo de latitudes y longitudes
  markers: [string, string][] = [];

  constructor(private hs:HomeServicesService) {

   }
  ngOnInit() {
    (mapboxgl as any).accessToken = environments.mapboxToken;

    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      // Crear el mapa y agregar el marcador de ubicación
      this.map = new mapboxgl.Map({
        container: 'mapa',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
      });

      new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(this.map);
    

      // Verificar que el mapa esté definido antes de agregar los controles
      if (this.map) {
        this.map.addControl(new mapboxgl.NavigationControl());
      }
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    
  }

  setLatLong(posiciones: any[]) {
    // Eliminar marcadores anteriores
    this.markers = [];
  
    // Recorrer el arreglo de posiciones y crear un marcador para cada posición
    posiciones.forEach(posicion => {
      const marker = new mapboxgl.Marker().setLngLat([posicion.longitud, posicion.latitud]);
      this.markers.push([posicion.latitud, posicion.longitud]);
      marker.addTo(this.map);
    });
  }
  */




  }




