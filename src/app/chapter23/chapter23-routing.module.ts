import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter23Page } from './chapter23.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter23PageRoutingModule {}
