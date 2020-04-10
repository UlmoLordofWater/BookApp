import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'cover',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
  {
    path: 'chapter11',
    loadChildren: () => import('./chapter11/chapter11.module').then( m => m.Chapter11PageModule)
  },
  {
    path: 'chapter12',
    loadChildren: () => import('./chapter12/chapter12.module').then( m => m.Chapter12PageModule)
  },
  {
    path: 'chapter21',
    loadChildren: () => import('./chapter21/chapter21.module').then( m => m.Chapter21PageModule)
  },
  {
    path: 'chapter22',
    loadChildren: () => import('./chapter22/chapter22.module').then( m => m.Chapter22PageModule)
  },
  {
    path: 'chapter20',
    loadChildren: () => import('./chapter20/chapter20.module').then( m => m.Chapter20PageModule)
  },
  {
    path: 'chapter23',
    loadChildren: () => import('./chapter23/chapter23.module').then( m => m.Chapter23PageModule)
  },
  {
    path: 'chapter30',
    loadChildren: () => import('./chapter30/chapter30.module').then( m => m.Chapter30PageModule)
  },
  {
    path: 'chapter31',
    loadChildren: () => import('./chapter31/chapter31.module').then( m => m.Chapter31PageModule)
  },
  {
    path: 'chapter32',
    loadChildren: () => import('./chapter32/chapter32.module').then( m => m.Chapter32PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
