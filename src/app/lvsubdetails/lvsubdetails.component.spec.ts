import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvsubdetailsComponent } from './lvsubdetails.component';

describe('LvsubdetailsComponent', () => {
  let component: LvsubdetailsComponent;
  let fixture: ComponentFixture<LvsubdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvsubdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvsubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
