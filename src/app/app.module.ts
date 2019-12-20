import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './shop/cart/cart.component';
import { ProductSelectComponent } from './shop/product-select/product-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorModalComponent,
    ShopComponent,
    CartComponent,
    ProductSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BootstrapModuleGroup,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorModalComponent],
})
export class AppModule { }
