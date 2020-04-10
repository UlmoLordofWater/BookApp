import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter32Page } from './chapter32.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter32PageRoutingModule {}
