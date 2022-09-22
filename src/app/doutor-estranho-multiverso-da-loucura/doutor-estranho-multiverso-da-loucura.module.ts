import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoutorEstranhoMultiversoDaLoucuraPageRoutingModule } from './doutor-estranho-multiverso-da-loucura-routing.module';

import { DoutorEstranhoMultiversoDaLoucuraPage } from './doutor-estranho-multiverso-da-loucura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoutorEstranhoMultiversoDaLoucuraPageRoutingModule
  ],
  declarations: [DoutorEstranhoMultiversoDaLoucuraPage]
})
export class DoutorEstranhoMultiversoDaLoucuraPageModule {}
