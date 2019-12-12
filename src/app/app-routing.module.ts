import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', component: PostListComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/authGroup.module#AuthGroupModule' },
  // { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  // { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})

export class AppRoutingModule { }
