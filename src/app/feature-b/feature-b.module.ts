import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ],
  declarations: [ThreeComponent, FourComponent]
})
export class FeatureBModule { }
