import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NumberOnlyDirective } from './number-only.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    // AppComponent,
    BrowserModule,
    CommonModule,
    MenuItemsComponent,
    ProductListingComponent,
    NumberOnlyDirective
  ],
  bootstrap: [
    AppComponent
  ],
  exports:[
    NumberOnlyDirective
  ]
})
export class AppModule { }
