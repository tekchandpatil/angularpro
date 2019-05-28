import { TestBed } from '@angular/core/testing';

import { ReadMeService } from './read-me.service';

describe('ReadMeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadMeService = TestBed.get(ReadMeService);
    expect(service).toBeTruthy();
  });
});
