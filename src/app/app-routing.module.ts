import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ShopComponent } from './shop/shop.component';
import { TestBitComponent } from './test/test-bit/test-bit.component';

const routes: Routes = [
  { path: '', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/authGroup.module#AuthGroupModule' },
  { path: 'test', component: TestBitComponent },
  // { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
