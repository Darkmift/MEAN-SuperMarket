import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { PanelLeftComponent } from './panel-left/panel-left.component';
import { PanelRightComponent } from './panel-right/panel-right.component';
import { PanelMiddleComponent } from './panel-middle/panel-middle.component';

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'panel-left', component: PanelLeftComponent },
  { path: 'panel-right', component: PanelRightComponent },
  { path: 'panel-middle', component: PanelMiddleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PortalRoutingModule {

}