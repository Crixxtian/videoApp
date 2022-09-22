import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoraDoPesadeloPage } from './hora-do-pesadelo.page';

const routes: Routes = [
  {
    path: '',
    component: HoraDoPesadeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoraDoPesadeloPageRoutingModule {}
