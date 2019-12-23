import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { PortalComponent } from './portal/portal.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './portal/portalGroup.module#PortalGroupModule', canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}