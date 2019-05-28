import { TestBed } from '@angular/core/testing';

import { UserRegiService } from './user-regi.service';

describe('UserRegiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegiService = TestBed.get(UserRegiService);
    expect(service).toBeTruthy();
  });
});
