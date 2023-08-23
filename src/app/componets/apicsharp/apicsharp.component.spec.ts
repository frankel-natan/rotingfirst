import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicsharpComponent } from './apicsharp.component';

describe('ApicsharpComponent', () => {
  let component: ApicsharpComponent;
  let fixture: ComponentFixture<ApicsharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicsharpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApicsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
