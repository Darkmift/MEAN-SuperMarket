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
import { ProductItemComponent } from './product-select/product-item/product-item.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { OrderComponent } from './order/order.component';
import { HighlightSearchPipe } from '../pipes/highlight.pipe';
import { OrderModalComponent } from './order/order-modal/order-modal.component';




@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    ProductSelectComponent,
    CategoriesComponent,
    ProductDisplayComponent,
    SearchComponent,
    ProductItemComponent,
    CartItemComponent,
    OrderComponent,
    HighlightSearchPipe,
    OrderModalComponent
  ],
  entryComponents: [OrderModalComponent],
  imports: [
    CommonModule,
    BootstrapModuleGroup,
    FormsModule,
    ShopRoutingModule
  ]
})

export class ShopGroupModule { }
