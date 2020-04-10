import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter22PageRoutingModule } from './chapter22-routing.module';

import { Chapter22Page } from './chapter22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter22PageRoutingModule
  ],
  declarations: [Chapter22Page]
})
export class Chapter22PageModule {}
