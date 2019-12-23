import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { PortalComponent } from './portal/portal.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'portal', loadChildren: './portal/portalGroup.module#PortalGroupModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}