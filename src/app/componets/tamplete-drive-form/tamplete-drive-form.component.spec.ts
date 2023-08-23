import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampleteDriveFormComponent } from './tamplete-drive-form.component';

describe('TampleteDriveFormComponent', () => {
  let component: TampleteDriveFormComponent;
  let fixture: ComponentFixture<TampleteDriveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TampleteDriveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TampleteDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
