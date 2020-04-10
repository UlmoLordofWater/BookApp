import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter32PageRoutingModule } from './chapter32-routing.module';

import { Chapter32Page } from './chapter32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter32PageRoutingModule
  ],
  declarations: [Chapter32Page]
})
export class Chapter32PageModule {}
