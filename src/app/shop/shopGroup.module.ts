import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BootstrapModuleGroup } from '../bootstrapGroup/bootstrap-modules.module';
import { ShopComponent } from './shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CategoriesComponent } from './product-select/categories/categories.component';
import { ProductDisplayComponent } from './product-select/product-display/product-display.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    ProductSelectComponent,
    CategoriesComponent,
    ProductDisplayComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    BootstrapModuleGroup,
    FormsModule,
    ShopRoutingModule
  ]
})

export class ShopGroupModule { }
