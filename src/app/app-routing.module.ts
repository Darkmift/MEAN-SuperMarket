import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
// import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  // { path: '', component: ShopComponent, canActivate: [AuthGuard] },
  { path: '', loadChildren: './shop/shopGroup.module#ShopGroupModule', canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/authGroup.module#AuthGroupModule' },
  // { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  //   { path: '', redirectTo: '/portal'/*, pathMatch: 'full'*/ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
