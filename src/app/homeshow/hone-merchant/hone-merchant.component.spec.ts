import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneMerchantComponent } from './hone-merchant.component';

describe('HoneMerchantComponent', () => {
  let component: HoneMerchantComponent;
  let fixture: ComponentFixture<HoneMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
