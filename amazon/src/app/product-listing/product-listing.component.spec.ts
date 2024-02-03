import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingComponent } from './product-listing.component';
import { By } from '@angular/platform-browser';

describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the product listing container with the correct structure', () => {
    const headerContainer = fixture.debugElement.query(By.css('.head-container'));
    expect(headerContainer).toBeTruthy();
  });
});
