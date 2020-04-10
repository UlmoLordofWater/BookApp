import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter31Page } from './chapter31.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter31PageRoutingModule {}
