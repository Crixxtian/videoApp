import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsMinionPageRoutingModule } from './os-minion-routing.module';

import { OsMinionPage } from './os-minion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsMinionPageRoutingModule
  ],
  declarations: [OsMinionPage]
})
export class OsMinionPageModule {}
