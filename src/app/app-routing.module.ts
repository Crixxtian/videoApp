import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'os-minion',
    loadChildren: () => import('./os-minion/os-minion.module').then( m => m.OsMinionPageModule)
  },
  {
    path: 'doutor-estranho-multiverso-da-loucura',
    loadChildren: () => import('./doutor-estranho-multiverso-da-loucura/doutor-estranho-multiverso-da-loucura.module').then( m => m.DoutorEstranhoMultiversoDaLoucuraPageModule)
  },
  {
    path: 'jurassic-word-dominio',
    loadChildren: () => import('./jurassic-word-dominio/jurassic-word-dominio.module').then( m => m.JurassicWordDominioPageModule)
  },
  {
    path: 'panico',
    loadChildren: () => import('./panico/panico.module').then( m => m.PanicoPageModule)
  },
  {
    path: 'hora-do-pesadelo',
    loadChildren: () => import('./hora-do-pesadelo/hora-do-pesadelo.module').then( m => m.HoraDoPesadeloPageModule)
  },
  {
    path: 'lugar-silencioso',
    loadChildren: () => import('./lugar-silencioso/lugar-silencioso.module').then( m => m.LugarSilenciosoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
