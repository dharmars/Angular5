import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLCComponent } from './child-lc.component';

describe('ChildLCComponent', () => {
  let component: ChildLCComponent;
  let fixture: ComponentFixture<ChildLCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
