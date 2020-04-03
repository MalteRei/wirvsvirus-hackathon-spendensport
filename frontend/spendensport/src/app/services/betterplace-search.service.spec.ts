import { TestBed } from '@angular/core/testing';

import { BetterplaceSearchService } from './betterplace-search.service';

describe('BetterplaceSearchService', () => {
  let service: BetterplaceSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterplaceSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
