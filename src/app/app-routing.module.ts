import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homepage/home/home.component';
import { FullScreenComponent } from './map/full-screen/full-screen.component';
import { ZoomRangeComponent } from './map/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './map/marcadores/marcadores.component';
import { MiniMapComponent } from './map/mini-map/mini-map.component';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './map/acerca-de/acerca-de.component';


const routes:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'fullscreen',
    component:FullScreenComponent
  },
  {
    path:'zoom-range',
    component:ZoomRangeComponent
  },
  {
    path:'marcadores',
    component:MarcadoresComponent
  },
  {
    path:'minimap',
    component:MiniMapComponent
  },
  {
    path:'zoom-range',
    component:ZoomRangeComponent
  },
  {
    path:'acerca-de',
    component:AcercaDeComponent
  },
  {
    path:'**',
    redirectTo:'/home',
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
