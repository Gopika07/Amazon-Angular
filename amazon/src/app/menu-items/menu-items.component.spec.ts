import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsComponent } from './menu-items.component';
import { By } from '@angular/platform-browser';

describe('MenuItemsComponent', () => {
  let component: MenuItemsComponent;
  let fixture: ComponentFixture<MenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu container with the correct structure', () => {
    const headerContainer = fixture.debugElement.query(By.css('.menu-container'));
    expect(headerContainer).toBeTruthy();
  });
});
