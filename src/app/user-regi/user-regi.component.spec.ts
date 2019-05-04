import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegiComponent } from './user-regi.component';

describe('UserRegiComponent', () => {
  let component: UserRegiComponent;
  let fixture: ComponentFixture<UserRegiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
