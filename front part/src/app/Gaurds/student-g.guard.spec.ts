import { TestBed } from '@angular/core/testing';

import { StudentGGuard } from './student-g.guard';

describe('StudentGGuard', () => {
  let guard: StudentGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
