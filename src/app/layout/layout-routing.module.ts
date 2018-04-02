import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'featureA', loadChildren: 'app/feature-a/feature-a.module#FeatureAModule', data: { preload: true } },
      { path: 'featureB', loadChildren: 'app/feature-b/feature-b.module#FeatureBModule', data: { preload: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
