import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsPageRoutingModule } from './reviews-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';

import { ReviewsPage } from './reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsPageRoutingModule
  ],
  declarations: [ReviewsPage,NavbarComponent]
})
export class ReviewsPageModule {}
