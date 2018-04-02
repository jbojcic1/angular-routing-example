import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { FeatureAModule } from '../feature-a/feature-a.module';
import { FeatureBModule } from '../feature-b/feature-b.module';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'featureA', loadChildren: () => FeatureAModule },
      // { path: 'featureA', loadChildren: 'app/feature-a/feature-a.module#FeatureAModule' },
      { path: 'featureB', loadChildren: () => FeatureBModule },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
