import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsMinionPage } from './os-minion.page';

const routes: Routes = [
  {
    path: '',
    component: OsMinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsMinionPageRoutingModule {}
