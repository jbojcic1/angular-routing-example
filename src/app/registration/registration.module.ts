import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FlexLayoutModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
