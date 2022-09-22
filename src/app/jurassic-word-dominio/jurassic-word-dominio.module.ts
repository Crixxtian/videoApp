import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JurassicWordDominioPageRoutingModule } from './jurassic-word-dominio-routing.module';

import { JurassicWordDominioPage } from './jurassic-word-dominio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JurassicWordDominioPageRoutingModule
  ],
  declarations: [JurassicWordDominioPage]
})
export class JurassicWordDominioPageModule {}
