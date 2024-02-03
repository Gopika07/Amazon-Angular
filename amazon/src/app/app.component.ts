import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  // declarations:[],
  // imports: [
  //   MenuItemsComponent,
  //   ProductListingComponent
  // ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amazon';
}
