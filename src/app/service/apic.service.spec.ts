import { TestBed } from '@angular/core/testing';

import { ApicService } from './apic.service';

describe('ApicService', () => {
  let service: ApicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
