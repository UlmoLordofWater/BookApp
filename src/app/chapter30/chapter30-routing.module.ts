import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter30Page } from './chapter30.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter30PageRoutingModule {}
