import { TestBed } from '@angular/core/testing';

import { FilmsServiceService } from './films-service.service';

describe('FilmsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsServiceService = TestBed.get(FilmsServiceService);
    expect(service).toBeTruthy();
  });
});
