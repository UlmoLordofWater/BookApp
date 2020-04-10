import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter30PageRoutingModule } from './chapter30-routing.module';

import { Chapter30Page } from './chapter30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter30PageRoutingModule
  ],
  declarations: [Chapter30Page]
})
export class Chapter30PageModule {}
