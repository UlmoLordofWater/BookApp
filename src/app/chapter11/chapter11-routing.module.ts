import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter11Page } from './chapter11.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter11PageRoutingModule {}
