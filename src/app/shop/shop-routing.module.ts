import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'portal', component: PortalComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}