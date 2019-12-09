import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTableComponent } from './alt-table.component';

describe('AltTableComponent', () => {
  let component: AltTableComponent;
  let fixture: ComponentFixture<AltTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
