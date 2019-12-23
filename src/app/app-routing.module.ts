import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'shop', loadChildren: './shop/shopGroup.module#ShopGroupModule', canActivate: [AuthGuard] },
  { path: 'portal', loadChildren: './portal/portalGroup.module#PortalGroupModule', canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/authGroup.module#AuthGroupModule' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
