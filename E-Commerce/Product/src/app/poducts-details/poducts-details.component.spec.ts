import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductsDetailsComponent } from './poducts-details.component';

describe('PoductsDetailsComponent', () => {
  let component: PoductsDetailsComponent;
  let fixture: ComponentFixture<PoductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoductsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
