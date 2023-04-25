import { Component } from '@angular/core';
import { HomeServicesService } from '../home-services.service';
import Swal from 'sweetalert2';
import { MapServicesService } from 'src/app/map/map-services.service';

@Component({
  selector: 'app-line-selector',
  templateUrl: './line-selector.component.html',
  styleUrls: ['./line-selector.component.css']
})
export class LineSelectorComponent {
  //en este array, vamos a guardar todo lo que me traiga el endpoint de las lineas
  states: string[] = [
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '30',
    '34',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    'B60'
  ];

  LatLong:any[]=[]

  showMap=false;
  selectedLine=''
  menuOpen:any=false;
  constructor(private hs:HomeServicesService, private ms:MapServicesService) { 


  }

  ngOnInit(): void {
   
  }

  //metodo que busca una linea y devuelve un array co
  GetLine(linea:string){
    this.selectedLine=linea
    if(linea!=''){
var req=this.hs.getBuses(linea)


this.showMap=true;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe seleccionar una línea',
        confirmButtonText: 'Aceptar'
      });
    }
  }




  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectItem(item: string) {
    console.log(`Selected item: ${item}`);
    // Do something when an item is selected
    
    this.hs.getRoutesByLine(this.selectedLine)
  }
 
}
