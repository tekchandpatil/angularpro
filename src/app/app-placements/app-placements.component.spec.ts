import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlacementsComponent } from './app-placements.component';

describe('AppPlacementsComponent', () => {
  let component: AppPlacementsComponent;
  let fixture: ComponentFixture<AppPlacementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPlacementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
