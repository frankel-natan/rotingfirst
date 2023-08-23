import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeaevComponent } from './zeaev.component';

describe('ZeaevComponent', () => {
  let component: ZeaevComponent;
  let fixture: ComponentFixture<ZeaevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeaevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeaevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
