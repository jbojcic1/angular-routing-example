import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';

const routes: Routes = [
  {
    path: 'featureA',
    component: LayoutComponent,
    children: [
      { path: 'one', component: OneComponent },
      { path: 'two', component: TwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
