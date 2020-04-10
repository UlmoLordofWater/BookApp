import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter23PageRoutingModule } from './chapter23-routing.module';

import { Chapter23Page } from './chapter23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter23PageRoutingModule
  ],
  declarations: [Chapter23Page]
})
export class Chapter23PageModule {}
