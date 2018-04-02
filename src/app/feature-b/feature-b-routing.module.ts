import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThreeComponent} from './three/three.component';
import {FourComponent} from './four/four.component';

const routes: Routes = [
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureBRoutingModule { }
