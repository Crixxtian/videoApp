import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoutorEstranhoMultiversoDaLoucuraPage } from './doutor-estranho-multiverso-da-loucura.page';

const routes: Routes = [
  {
    path: '',
    component: DoutorEstranhoMultiversoDaLoucuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoutorEstranhoMultiversoDaLoucuraPageRoutingModule {}
