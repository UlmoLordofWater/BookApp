import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter11PageRoutingModule } from './chapter11-routing.module';

import { Chapter11Page } from './chapter11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter11PageRoutingModule
  ],
  declarations: [Chapter11Page]
})
export class Chapter11PageModule {}
