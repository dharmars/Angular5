import { TestBed } from '@angular/core/testing';

import { RechargePlansAPIService } from './recharge-plans-api.service';

describe('RechargePlansAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RechargePlansAPIService = TestBed.get(RechargePlansAPIService);
    expect(service).toBeTruthy();
  });
});
