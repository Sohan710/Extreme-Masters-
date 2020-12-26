import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetalisComponent } from './productdetalis.component';

describe('ProductdetalisComponent', () => {
  let component: ProductdetalisComponent;
  let fixture: ComponentFixture<ProductdetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
