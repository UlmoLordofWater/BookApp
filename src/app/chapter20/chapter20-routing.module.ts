import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter20Page } from './chapter20.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter20PageRoutingModule {}
