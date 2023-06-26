import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LineSelectorComponent } from './line-selector/line-selector.component';
import { MapModule } from '../map/map.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    HomeComponent,
    LineSelectorComponent
  ],
  imports: [
    CommonModule,
    MapModule,NavBarModule,
    BrowserAnimationsModule ,
    MatSlideToggleModule,
 MatCardModule,
 MatDatepickerModule,
 MatFormFieldModule,
 MatSlideToggleModule,
 MatSelectModule,FormsModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomepageModule { }
