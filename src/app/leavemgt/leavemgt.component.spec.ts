import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemgtComponent } from './leavemgt.component';

describe('LeavemgtComponent', () => {
  let component: LeavemgtComponent;
  let fixture: ComponentFixture<LeavemgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavemgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
