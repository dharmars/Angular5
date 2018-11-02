import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRechargePlansComponent } from './show-recharge-plans.component';

describe('ShowRechargePlansComponent', () => {
  let component: ShowRechargePlansComponent;
  let fixture: ComponentFixture<ShowRechargePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRechargePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRechargePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
