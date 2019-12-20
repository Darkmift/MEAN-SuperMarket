import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BootstrapModuleGroup } from '../bootstrapGroup/bootstrap-modules.module';
import { ShopComponent } from './shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import { ShopRoutingModule } from './shop-routing.module';
import { PortalComponent } from './portal/portal.component';
import { PanelInfoComponent } from './panel-info/panel-info.component';




@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    ProductSelectComponent,
    PortalComponent,
    PanelInfoComponent
  ],
  imports: [
    CommonModule,
    BootstrapModuleGroup,
    FormsModule,
    ShopRoutingModule
  ]
})

export class ShopGroupModule { }
