import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
