import { TestBed } from '@angular/core/testing';

import { DualScreenInformationService } from './dual-screen-information.service';

describe('DualScreenInformationService', () => {
  let service: DualScreenInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DualScreenInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
