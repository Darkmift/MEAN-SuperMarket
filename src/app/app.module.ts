import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BootstrapModuleGroup } from './bootstrapGroup/bootstrap-modules.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './auth/auth-interceptor';

import { ErrorInterceptor } from './error-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorModalComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModuleGroup,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorModalComponent],
})
export class AppModule { }
