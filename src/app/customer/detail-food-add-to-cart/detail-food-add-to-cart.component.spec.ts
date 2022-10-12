import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFoodAddToCartComponent } from './detail-food-add-to-cart.component';

describe('DetailFoodAddToCartComponent', () => {
  let component: DetailFoodAddToCartComponent;
  let fixture: ComponentFixture<DetailFoodAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFoodAddToCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFoodAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
