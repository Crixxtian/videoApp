import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JurassicWordDominioPage } from './jurassic-word-dominio.page';

const routes: Routes = [
  {
    path: '',
    component: JurassicWordDominioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JurassicWordDominioPageRoutingModule {}
