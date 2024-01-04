import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { languageGuard } from './language.guard';

describe('languageGuardServiceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => languageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
