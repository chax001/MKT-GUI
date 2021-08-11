import { TestBed } from '@angular/core/testing';

import { BbgboserviceService } from './bbgboservice.service';

describe('BbgboserviceService', () => {
  let service: BbgboserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbgboserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
