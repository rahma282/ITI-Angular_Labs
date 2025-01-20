import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReisterComponent } from './form-reister.component';

describe('FormReisterComponent', () => {
  let component: FormReisterComponent;
  let fixture: ComponentFixture<FormReisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
