import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { BootstrapModuleGroup } from '../bootstrapGroup/bootstrap-modules.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    BootstrapModuleGroup,
    FormsModule,
    AuthRoutingModule
  ]
})

export class AuthGroupModule { }
