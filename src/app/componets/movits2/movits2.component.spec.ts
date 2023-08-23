import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movits2Component } from './movits2.component';

describe('Movits2Component', () => {
  let component: Movits2Component;
  let fixture: ComponentFixture<Movits2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movits2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movits2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
