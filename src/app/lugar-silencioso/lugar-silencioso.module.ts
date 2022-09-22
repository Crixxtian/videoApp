import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarSilenciosoPageRoutingModule } from './lugar-silencioso-routing.module';

import { LugarSilenciosoPage } from './lugar-silencioso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarSilenciosoPageRoutingModule
  ],
  declarations: [LugarSilenciosoPage]
})
export class LugarSilenciosoPageModule {}
