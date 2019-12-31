import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', component: ShopComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
