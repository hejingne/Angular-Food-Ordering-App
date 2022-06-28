import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemAlertsComponent } from './menu-item-alerts.component';

describe('MenuItemAlertsComponent', () => {
  let component: MenuItemAlertsComponent;
  let fixture: ComponentFixture<MenuItemAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
