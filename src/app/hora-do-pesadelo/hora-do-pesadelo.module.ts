import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoraDoPesadeloPageRoutingModule } from './hora-do-pesadelo-routing.module';

import { HoraDoPesadeloPage } from './hora-do-pesadelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoraDoPesadeloPageRoutingModule
  ],
  declarations: [HoraDoPesadeloPage]
})
export class HoraDoPesadeloPageModule {}
