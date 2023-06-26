import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapServicesService } from '../map/map-services.service';
import { FullScreenComponent } from '../map/full-screen/full-screen.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  //url='http://192.168.0.50:8080/https://mrb.red-bus.com.ar/rest/posicionesBuses/'
//  urlParadas='http://192.168.0.50:8080/https://mrb.red-bus.com.ar/rest/rutaLinea/'
//url='https://cors-anywhere.herokuapp.com/https://mrb.red-bus.com.ar/rest/posicionesBuses/'
//urlParadas='https://cors-anywhere.herokuapp.com/https://mrb.red-bus.com.ar/rest/rutaLinea/'
url='https://mrb.red-bus.com.ar/rest/posicionesBuses/'
urlParadas='https://mrb.red-bus.com.ar/rest/rutaLinea/'
constructor(private http: HttpClient, private ms: MapServicesService) {



  // Crear una suscripción a intervalo en el constructor
  this.updateSubscription = interval(6000).subscribe(() => {
    // Llamar a getBuses() cada 10 segundos
    //this.getBuses(this.lastLine);
    //this.GetBusesStatic(this.lastLine)
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
  updateFollow:any;
  subscription: Subscription = new Subscription();
  lastLine: string = '';
  resultados:any[]=[];
  posiciones:any[]=[];
  paradas:any[]=[];

  //para los datos estaticos
   cordobaCoordinates = { latitud: -31.4167, longitud: -64.1833 };
   coordinateVariations:any=[]

    coordinateLine14:any = [
    {latitud: -31.329738, longitud: -64.294590},
    {latitud: -31.331074, longitud: -64.293099},
    {latitud: -31.332453, longitud: -64.292788},
    {latitud: -31.333815, longitud: -64.292524},
    {latitud: -31.335511, longitud: -64.290955},
    {latitud: -31.336762, longitud: -64.290327},
    {latitud: -31.338952, longitud: -64.290371},
    {latitud: -31.341643, longitud: -64.290424},
    {latitud: -31.343064, longitud: -64.288967},
    {latitud: -31.344215, longitud: -64.287175},
    {latitud: -31.345745, longitud: -64.284489},
    {latitud: -31.346733, longitud: -64.280756},
    {latitud: -31.346934, longitud: -64.277225},
    {latitud: -31.347209, longitud: -64.273361},
    {latitud: -31.347510, longitud: -64.268568},
    {latitud: -31.347857, longitud: -64.263619},
    {latitud: -31.348007, longitud: -64.260870},
    {latitud: -31.348216, longitud: -64.257681},
    {latitud: -31.348880, longitud: -64.254067},
    {latitud: -31.349264, longitud: -64.253064},
    {latitud: -31.350868, longitud: -64.253837},
    {latitud: -31.351775, longitud: -64.254253},
    {latitud: -31.353997, longitud: -64.255275},
    {latitud: -31.355834, longitud: -64.256507},
    {latitud: -31.357192, longitud: -64.256957},
    {latitud: -31.357651, longitud: -64.255519},
    {latitud: -31.358395, longitud: -64.253010},
    {latitud: -31.359125, longitud: -64.250565},
    {latitud: -31.359961, longitud: -64.247660},
    {latitud: -31.358725, longitud: -64.247136},
    {latitud: -31.357267, longitud: -64.246550},
    {latitud: -31.356168, longitud: -64.246105},
    {latitud: -31.355049, longitud: -64.245650},
    {latitud: -31.356586, longitud: -64.243693},
    {latitud: -31.357346, longitud: -64.242094},
    {latitud: -31.357697, longitud: -64.240876},
    {latitud: -31.359242, longitud: -64.239147},
    {latitud: -31.359984, longitud: -64.238734},
    {latitud: -31.363220, longitud: -64.236917},
    {latitud: -31.365576, longitud: -64.235342},
    {latitud: -31.369309, longitud: -64.232417},
    {latitud: -31.372040, longitud: -64.230129},
    {latitud: -31.374203, longitud: -64.228280},
    {latitud: -31.376725, longitud: -64.226108},
    {latitud: -31.379648, longitud: -64.223457},
    {latitud: -31.383897, longitud: -64.221627},
    {latitud: -31.385341, longitud: -64.219794},
    {latitud: -31.387008, longitud: -64.217932},
    {latitud: -31.387833, longitud: -64.217076},
];

coordinateLine30:any =[
  
  { latitud: -31.358887, longitud: -64.183902 },
  { latitud: -31.359510, longitud: -64.183886 },
  { latitud: -31.360609, longitud: -64.183907 },
  { latitud: -31.361755, longitud: -64.183907 },
  { latitud: -31.362597, longitud: -64.183907 },
  { latitud: -31.364796, longitud: -64.183896 },
  { latitud: -31.366340, longitud: -64.183859 },
  { latitud: -31.367274, longitud: -64.183891 },
  { latitud: -31.368886, longitud: -64.183918 },
  { latitud: -31.370874, longitud: -64.183864 },
  { latitud: -31.372450, longitud: -64.183859 },
  { latitud: -31.376157, longitud: -64.183835 },
  { latitud: -31.379537, longitud: -64.183845 },
  { latitud: -31.382120, longitud: -64.183867 },
  { latitud: -31.384053, longitud: -64.183802 },
  { latitud: -31.388431, longitud: -64.183802 },
  { latitud: -31.390684, longitud: -64.183888 },
  { latitud: -31.392864, longitud: -64.184639 },
  { latitud: -31.396051, longitud: -64.185948 },
  { latitud: -31.400227, longitud: -64.187665 },
  { latitud: -31.400300, longitud: -64.191184 },
  { latitud: -31.401179, longitud: -64.188394 },
  { latitud: -31.402113, longitud: -64.185433 },
  { latitud: -31.403542, longitud: -64.182579 },
  { latitud: -31.407479, longitud: -64.183480 },
  { latitud: -31.412204, longitud: -64.185476 },
  { latitud: -31.416599, longitud: -64.187375 },
  { latitud: -31.420014, longitud: -64.188856 },
  { latitud: -31.424198, longitud: -64.190519 },
  { latitud: -31.427906, longitud: -64.192085 },
  { latitud: -31.431174, longitud: -64.193469 },
  { latitud: -31.434744, longitud: -64.194939 },
  { latitud: -31.438607, longitud: -64.196098 },
  { latitud: -31.442552, longitud: -64.197385 },
  { latitud: -31.445106, longitud: -64.198211 },
  { latitud: -31.448163, longitud: -64.199220 },
  { latitud: -31.450333, longitud: -64.200003 },
  { latitud: -31.451266, longitud: -64.202674 },
  { latitud: -31.452246, longitud: -64.204219 },
  { latitud: -31.453673, longitud: -64.206269 },
  { latitud: -31.455421, longitud: -64.208339 },
  { latitud: -31.455961, longitud: -64.208565 },
  { latitud: -31.457627, longitud: -64.210056 },
  { latitud: -31.458451, longitud: -64.212395 },
  { latitud: -31.458872, longitud: -64.213596 },
  { latitud: -31.459769, longitud: -64.215581 },
  { latitud: -31.461553, longitud: -64.218499 },
  { latitud: -31.462715, longitud: -64.220152 },
  { latitud: -31.464619, longitud: -64.221825 },
  { latitud: -31.466367, longitud: -64.223692 },
  { latitud: -31.465369, longitud: -64.225130 },
  { latitud: -31.464491, longitud: -64.226439 },
  { latitud: -31.465571, longitud: -64.227726 },
  { latitud: -31.467913, longitud: -64.230548 },
  { latitud: -31.469551, longitud: -64.232576 },
  { latitud: -31.470860, longitud: -64.234196 },
  { latitud: -31.472717, longitud: -64.236631 },
  { latitud: -31.473207, longitud: -64.239270 },
  { latitud: -31.474415, longitud: -64.240751 },
  { latitud: -31.475833, longitud: -64.242462 },
  { latitud: -31.476808, longitud: -64.243653 },
  { latitud: -31.477993, longitud: -64.245091 },
  { latitud: -31.479365, longitud: -64.246781 },
  { latitud: -31.480426, longitud: -64.248084 },
  { latitud: -31.481437, longitud: -64.249264 },
  { latitud: -31.482426, longitud: -64.249457 },
  { latitud: -31.483244, longitud: -64.249431 },
  { latitud: -31.483244, longitud: -64.248368 },
  { latitud: -31.483286, longitud: -64.246850 },
  { latitud: -31.483757, longitud: -64.247043 },
  { latitud: -31.484530, longitud: -64.247816 },
  { latitud: -31.485084, longitud: -64.248411 },
  { latitud: -31.485710, longitud: -64.247548 },
  { latitud: -31.486415, longitud: -64.246636 },
  { latitud: -31.486209, longitud: -64.245697 },
  { latitud: -31.486200, longitud: -64.243836 }
]


  cont=0
  previousLine:any=''
  GetBusesStatic(linea:string){
    console.log(linea)
  

    if (linea !== this.previousLine) {
      clearInterval(this.updateFollow); // Detener el intervalo anterior si existe
      this.previousLine = linea; // Actualizar la línea anterior
    }
    // Generar variaciones en las coordenadas
    console.log(this.cont)    
    console.log("cont: ",this.coordinateLine14[this.cont] )
    this.getRoutes13Static(linea)
    
    let i = 0;
    if(linea =="13" || linea =="30" ){
      this.updateFollow = setInterval(() => {
     
  
        if(linea=='13'){
            if(i < this.coordinateLine14.length) {
              this.ms.setRecorridoEstatico(this.coordinateLine14[i]);
              i++;
          } else {
              clearInterval(this.updateFollow);
          }
        }
        else if(linea=='30'){
            if(i < this.coordinateLine30.length) {
              this.ms.setRecorridoEstatico(this.coordinateLine30[i]);
              i++;
          } else {
              clearInterval(this.updateFollow);
          }
          
  
      
        }

      }, 6000);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'La línea no está disponible',
    });
    }
    
    this.cont++
  
  }

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


  

  paradas2:any = [
    {latitud: -31.329778, longitud: -64.294512},
    {latitud: -31.332760, longitud: -64.292708},
    {latitud: -31.338013, longitud: -64.290304},
    {latitud: -31.339850, longitud: -64.290327},
    {latitud: -31.342239, longitud: -64.289749},
    {latitud: -31.344806, longitud: -64.286096},
    {latitud: -31.346425, longitud: -64.282581},
    {latitud: -31.346860, longitud: -64.277726},
    {latitud: -31.347136, longitud: -64.273356},
    {latitud: -31.347966, longitud: -64.261703},
    {latitud: -31.348350, longitud: -64.256263},
    {latitud: -31.351435, longitud: -64.254043},
    {latitud: -31.355581, longitud: -64.256192},
    {latitud: -31.358110, longitud: -64.253894},
    {latitud: -31.359552, longitud: -64.249165},
    {latitud: -31.357188, longitud: -64.246531},
    {latitud: -31.355684, longitud: -64.244903},
    {latitud: -31.357020, longitud: -64.242893},
    {latitud: -31.360173, longitud: -64.238680},
    {latitud: -31.361816, longitud: -64.237720},
    {latitud: -31.366535, longitud: -64.234711},
    {latitud: -31.369687, longitud: -64.232172},
    {latitud: -31.373786, longitud: -64.228737},
    {latitud: -31.376519, longitud: -64.226261},
    {latitud: -31.378955, longitud: -64.223954},
    {latitud: -31.383376, longitud: -64.222342},
    {latitud: -31.384955, longitud: -64.220095},
    {latitud: -31.386487, longitud: -64.218321}
  ];

  paradas30:any = [
    {latitud: -31.357020, longitud: -64.242893},
    {latitud: -31.360639, longitud: -64.183869},
    {latitud: -31.362874, longitud: -64.183880},
    {latitud: -31.366365, longitud: -64.183934},
    {latitud: -31.368609, longitud: -64.183891},
    {latitud: -31.371715, longitud: -64.183891},
    {latitud: -31.377431, longitud: -64.183891},
    {latitud: -31.380563, longitud: -64.183880},
    {latitud: -31.384154, longitud: -64.183848},
    {latitud: -31.393456, longitud: -64.184881},
    {latitud: -31.395397, longitud: -64.185654},
    {latitud: -31.400411, longitud: -64.189210},
    {latitud: -31.401327, longitud: -64.187891},
    {latitud: -31.402202, longitud: -64.185117},
    {latitud: -31.403859, longitud: -64.182548},
    {latitud: -31.405063, longitud: -64.182805},
    {latitud: -31.407504, longitud: -64.183546},
    {latitud: -31.409875, longitud: -64.184495},
    {latitud: -31.411409, longitud: -64.185101},
    {latitud: -31.412631, longitud: -64.185654},
    {latitud: -31.414252, longitud: -64.186303},
    {latitud: -31.415511, longitud: -64.186850},
    {latitud: -31.416669, longitud: -64.187338},
    {latitud: -31.418432, longitud: -64.188030},
    {latitud: -31.419782, longitud: -64.188712},
    {latitud: -31.422245, longitud: -64.189704},
    {latitud: -31.424154, longitud: -64.190530},
    {latitud: -31.425513, longitud: -64.191099},
    {latitud: -31.428713, longitud: -64.192451},
    {latitud: -31.430869, longitud: -64.193347},
    {latitud: -31.432457, longitud: -64.194039},
    {latitud: -31.435094, longitud: -64.195074},
    {latitud: -31.436897, longitud: -64.195648},
    {latitud: -31.439753, longitud: -64.196598},
    {latitud: -31.440916, longitud: -64.196898},
    {latitud: -31.442508, longitud: -64.197467},
    {latitud: -31.445227, longitud: -64.198293},
    {latitud: -31.446737, longitud: -64.198813},
    {latitud: -31.448847, longitud: -64.199500},
    {latitud: -31.450833, longitud: -64.201393},
    {latitud: -31.452142, longitud: -64.204070},
    {latitud: -31.453931, longitud: -64.206538},
    {latitud: -31.456521, longitud: -64.208748},
    {latitud: -31.457857, longitud: -64.210636},
    {latitud: -31.458983, longitud: -64.214021},
    {latitud: -31.460420, longitud: -64.216527},
    {latitud: -31.466332, longitud: -64.224015},
    {latitud: -31.464588, longitud: -64.226097},
    {latitud: -31.466277, longitud: -64.228634},
    {latitud: -31.468189, longitud: -64.230887},
    {latitud: -31.471909, longitud: -64.235425},
    {latitud: -31.472696, longitud: -64.237265},
    {latitud: -31.473327, longitud: -64.239438},
    {latitud: -31.474764, longitud: -64.241181},
    {latitud: -31.476365, longitud: -64.243086},
    {latitud: -31.478022, longitud: -64.245173},
    {latitud: -31.479582, longitud: -64.247061},
    {latitud: -31.481306, longitud: -64.249121},
    {latitud: -31.483251, longitud: -64.248938},
    {latitud: -31.483246, longitud: -64.247243},
    {latitud: -31.484367, longitud: -64.247667},
    {latitud: -31.485277, longitud: -64.248144},
    {latitud: -31.485876, longitud: -64.247361},
    {latitud: -31.486233, longitud: -64.243751}
];

  
getRoutesByLine(linea:string){
    
  this.http.get<any>(`${this.urlParadas + linea}`).subscribe(
      (resp) => {
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
      },
      (error) => {
         alert("Error al obtener rutas de paradas: "+ error.message);
      },
      () => {
        console.log("Observable completado");
      }
  );
}




getRoutes13Static(linea:String){
  if(linea=='13'){
  console.log("paradas: ",this.paradas2)
  this.ms.setMarkers(this.paradas2)
  }else if(linea=='30'){
    this.ms.setMarkers(this.paradas30)
  }
  }
}
