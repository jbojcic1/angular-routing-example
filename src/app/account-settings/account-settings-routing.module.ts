import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {AccountSettingsComponent} from './account-settings.component';

const routes: Routes = [
  {
    path: 'account-settings',
    component: MainLayoutComponent,
    children: [
      { path: '', component: AccountSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
