import { TestBed } from '@angular/core/testing';

import { GoalCreationService } from './goal-creation.service';

describe('GoalCreationService', () => {
  let service: GoalCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
