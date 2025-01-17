import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLsitComponent } from './user-lsit.component';

describe('UserLsitComponent', () => {
  let component: UserLsitComponent;
  let fixture: ComponentFixture<UserLsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLsitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
