import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regions2Component } from './regions2.component';

describe('Regions2Component', () => {
  let component: Regions2Component;
  let fixture: ComponentFixture<Regions2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Regions2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Regions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
