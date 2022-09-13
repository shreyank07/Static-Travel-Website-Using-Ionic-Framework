import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../navbar/navbar.component';

import { JourneyPageRoutingModule } from './journey-routing.module';

import { JourneyPage } from './journey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyPageRoutingModule
  ],
  declarations: [JourneyPage,NavbarComponent]
})
export class JourneyPageModule {}
