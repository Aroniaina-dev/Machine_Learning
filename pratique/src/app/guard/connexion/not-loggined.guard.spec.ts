import { TestBed } from '@angular/core/testing';

import { NotLogginedGuard } from './not-loggined.guard';

describe('NotLogginedGuard', () => {
  let guard: NotLogginedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLogginedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
