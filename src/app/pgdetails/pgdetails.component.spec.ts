import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdetailsComponent } from './pgdetails.component';

describe('PgdetailsComponent', () => {
  let component: PgdetailsComponent;
  let fixture: ComponentFixture<PgdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
