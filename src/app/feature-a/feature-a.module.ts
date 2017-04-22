import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureARoutingModule
  ],
  declarations: [OneComponent, TwoComponent]
})
export class FeatureAModule { }
