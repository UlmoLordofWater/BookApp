import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter31PageRoutingModule } from './chapter31-routing.module';

import { Chapter31Page } from './chapter31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter31PageRoutingModule
  ],
  declarations: [Chapter31Page]
})
export class Chapter31PageModule {}
