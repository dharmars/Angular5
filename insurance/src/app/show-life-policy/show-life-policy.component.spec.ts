import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLifePolicyComponent } from './show-life-policy.component';

describe('ShowLifePolicyComponent', () => {
  let component: ShowLifePolicyComponent;
  let fixture: ComponentFixture<ShowLifePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLifePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLifePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
