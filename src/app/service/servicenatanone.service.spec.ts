import { TestBed } from '@angular/core/testing';

import { ServicenatanoneService } from './servicenatanone.service';

describe('ServicenatanoneService', () => {
  let service: ServicenatanoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicenatanoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
