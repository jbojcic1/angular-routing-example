import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterOnlyLayoutComponent} from '../layout/footer-only-layout/footer-only-layout.component';
import {RegistrationComponent} from './registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
