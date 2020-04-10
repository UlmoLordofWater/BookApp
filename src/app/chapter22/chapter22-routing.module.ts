import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter22Page } from './chapter22.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter22PageRoutingModule {}
