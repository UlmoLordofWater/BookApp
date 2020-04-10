import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter20PageRoutingModule } from './chapter20-routing.module';

import { Chapter20Page } from './chapter20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter20PageRoutingModule
  ],
  declarations: [Chapter20Page]
})
export class Chapter20PageModule {}
