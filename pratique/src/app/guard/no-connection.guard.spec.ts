import { TestBed } from '@angular/core/testing';

import { NoConnectionGuard } from './no-connection.guard';

describe('NoConnectionGuard', () => {
  let guard: NoConnectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoConnectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
