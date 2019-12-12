import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BootstrapModuleGroup } from './bootstrap-modules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModuleGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
