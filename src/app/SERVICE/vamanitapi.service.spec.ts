import { TestBed } from '@angular/core/testing';

import { VamanitapiService } from './vamanitapi.service';

describe('VamanitapiService', () => {
  let service: VamanitapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VamanitapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
