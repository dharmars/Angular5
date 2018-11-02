import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsrDetailsComponent } from './insr-details.component';

describe('InsrDetailsComponent', () => {
  let component: InsrDetailsComponent;
  let fixture: ComponentFixture<InsrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
