import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniMapComponent } from './mini-map/mini-map.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { PropertiesComponent } from './properties/properties.component';
import { ZoomRangeComponent } from './zoom-range/zoom-range.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MiniMapComponent,
    FullScreenComponent,
    PropertiesComponent,
    ZoomRangeComponent,
    MarcadoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MiniMapComponent,
    FullScreenComponent,
    PropertiesComponent,
    ZoomRangeComponent,
    MarcadoresComponent,
    HttpClientModule
  ]

})
export class MapModule { }
