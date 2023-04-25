import { Injectable } from '@angular/core';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Subscription, interval } from 'rxjs';
import { HomeServicesService } from 'src/app/homepage/home-services.service';
import { environments } from 'src/environments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class MapServicesService {

  //definir url de la imagen
  busIcon='assets/bus-front-fill.svg'
  ParadaIcon='assets/parada.png'
  mapMarkers: mapboxgl.Marker[] = [];
  private markers: mapboxgl.Marker[] = [];
   private map!: mapboxgl.Map;
   subscription: Subscription = new Subscription();
 
   constructor() { }
 
   initMap(container: string, lat: number, lng: number) {
     (mapboxgl as any).accessToken = environments.mapboxToken;
 
     // Crear el mapa y agregar el marcador de ubicación
     this.map = new mapboxgl.Map({
       container,
       style: 'mapbox://styles/mapbox/streets-v11',
       zoom: 13,
       center: [lng, lat]
     });
 
     new mapboxgl.Marker().setLngLat([lng, lat]).addTo(this.map);
 
     // Agregar controles de navegación
     this.map.addControl(new mapboxgl.NavigationControl());
   }
 


   setLatLong(posiciones: any[]) {
    
    
 
     // Eliminar marcadores anteriores
  this.markers.forEach(marker => {
    marker.remove();
  });
 
    // console.log("marcadores",this.markers)
     //console.log("Posiciones lat: ",posiciones)
     
    posiciones.forEach(posicion => {
      const marker = new mapboxgl.Marker({
        element: this.createMarkerElement(this.busIcon)
      }).setLngLat([posicion.longitud, posicion.latitud]);
      this.markers.push(marker);
      marker.addTo(this.map);
    });
    
    // Cancelar la suscripción anterior, si existe
    this.subscription.unsubscribe();

    // Crear una nueva suscripción a interval() para llamar a setLatLong() cada 5 segundos
    this.subscription = interval(5000).subscribe(() => {
        this.setLatLong(posiciones);
    });
   }

   createMarkerElement(iconUrl: string): HTMLElement {
    const el = document.createElement('img');
    el.src = iconUrl;
    el.className = 'custom-marker';
    el.style.width='30px';
    el.style.height='30px';
    return el;
  }

  //seteo las paradas
  setMarkers(markers: any[]) {
    // Elimina los marcadores anteriores del mapa
    this.mapMarkers.forEach((marker: mapboxgl.Marker) => {
      marker.remove();
    });
    
    // Agrega los nuevos marcadores al mapa
    markers.forEach((marker: any) => {
      const el = document.createElement('img');
      el.className = 'marker';
      el.src = this.ParadaIcon;
      el.style.width = '15px';
      el.style.height = '15px';
    el.className = 'custom-marker';
    
      
      const mapMarker = new mapboxgl.Marker(el)
        .setLngLat([marker.longitud, marker.latitud])
        .addTo(this.map);
      
      this.mapMarkers.push(mapMarker);
    });
  }
    
  

   
   }

   

