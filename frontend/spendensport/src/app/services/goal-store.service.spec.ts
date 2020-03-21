import { TestBed } from '@angular/core/testing';

import { GoalStoreService } from './goal-store.service';

describe('GoalStoreService', () => {
  let service: GoalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
