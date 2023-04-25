import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapServicesService } from '../map/map-services.service';
import { FullScreenComponent } from '../map/full-screen/full-screen.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

url='https://mrb.red-bus.com.ar/rest/posicionesBuses/'
urlParadas='https://mrb.red-bus.com.ar/rest/rutaLinea/'
constructor(private http: HttpClient, private ms: MapServicesService) {
  // Crear una suscripción a intervalo en el constructor
  this.updateSubscription = interval(10000).subscribe(() => {
    // Llamar a getBuses() cada 10 segundos
    this.getBuses(this.lastLine);
  });
}
ngOnInit() {
  // Llamar a getBuses() al inicio
  this.getBuses(this.lastLine);
  
}

ngOnDestroy() {
  // Cancelar la suscripción al destruir el componente
  this.updateSubscription.unsubscribe();
}

 // Variable de clase para almacenar la suscripción a setInterval
  updateSubscription: any;
  subscription: Subscription = new Subscription();
  lastLine: string = '';
  resultados:any[]=[];
  posiciones:any[]=[];
  paradas:any[]=[];
 
/*
getBuses(linea: string) {
  
 

  this.http.get<any>(`${this.url + linea}`).subscribe((resp) => {
    console.log("Resp Completa: ", resp);

    // Si existe la propiedad de posiciones, lo mapeo para retornar la latitud y long
    if (resp && Array.isArray(resp.posiciones)) {
      // Inserta los resultados en el array
      this.resultados = resp.posiciones;

      // Crea un nuevo array con solo latitud y longitud
      this.posiciones = this.resultados.map(item => {
        return {
          latitud: item.latitud,
          longitud: item.longitud
        };
      });

      console.log("Posiciones: ", this.posiciones);
      this.setLatLong(this.posiciones);
      this.posiciones = [];
      this.lastLine = linea; // Almacenar la línea actual
      this.getRoutesByLine(linea)
      this.setParadas(this.paradas)
      this.paradas=[]
    } else {
      console.error("La respuesta no tiene la estructura esperada.");
    }
  });

   
  
}

  setLatLong(posiciones:any[]) {
    this.ms.setLatLong(posiciones);
  }
 

  //metodo para traerme las rutas por lineas
  getRoutesByLine(linea:string){
    this.http.get<any>(`${this.urlParadas + linea}`).subscribe((resp) => {
      console.log("Paradas Completa: ", resp);
      this.paradas = resp;
  
  

    });
  }

  setParadas(paradas:any[]){
    this.ms.setParadas(paradas);
  }*/
  getBuses(linea: string) {
  
    this.http.get<any>(`${this.url + linea}`).subscribe((resp) => {
      console.log("Resp Completa: ", resp);
  
      // Si existe la propiedad de posiciones, lo mapeo para retornar la latitud y long
      if (resp && Array.isArray(resp.posiciones)) {
        // Inserta los resultados en el array
        this.resultados = resp.posiciones;
  
        // Crea un nuevo array con solo latitud y longitud
        this.posiciones = this.resultados.map(item => {
          return {
            latitud: item.latitud,
            longitud: item.longitud
          };
        });
  
        console.log("Posiciones: ", this.posiciones);
        this.setLatLong(this.posiciones);
        this.posiciones = [];
        this.lastLine = linea; // Almacenar la línea actual
        
      } else {
        console.error("La respuesta no tiene la estructura esperada.");
      }
    });
  }
  
  setLatLong(posiciones:any[]) {
    this.ms.setLatLong(posiciones);
  }
  
  getRoutesByLine(linea:string){
    this.http.get<any>(`${this.urlParadas + linea}`).subscribe((resp) => {
      console.log("Paradas Completa: ", resp);
      
      // Formato de datos para el marcador del mapa
      interface Marker {
        latitud: number;
        longitud: number;
        
      }
      
      // Inicializa un array vacío para los marcadores del mapa
      const markers: Marker[] = [];
      
      // Procesar los datos de la respuesta API para las rutas de paradas correspondientes
      for (let i = 0; i < resp.nodos.length; i++) {
        const nodo = resp.nodos[i];
        const marker: Marker = {
          latitud: nodo.latitud,
          longitud: nodo.longitud,
          
        };
        markers.push(marker);
      }
      
      // Envía los marcadores del mapa a otra clase
      this.ms.setMarkers(markers);
    });
}
}