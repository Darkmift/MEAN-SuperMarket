import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { BootstrapModuleGroup } from '../bootstrapGroup/bootstrap-modules.module';
import { MustMatchDirective } from './signup/matchPasswords/must-match.directive';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    MustMatchDirective,
  ],
  imports: [
    CommonModule,
    BootstrapModuleGroup,
    FormsModule,
    AuthRoutingModule
  ]
})

export class AuthGroupModule { }
