import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatanComponent } from './natan.component';

describe('NatanComponent', () => {
  let component: NatanComponent;
  let fixture: ComponentFixture<NatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
