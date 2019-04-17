import { TestBed } from '@angular/core/testing';

import { HotelsSearchService } from './hotels-search.service';

describe('HotelsSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelsSearchService = TestBed.get(HotelsSearchService);
    expect(service).toBeTruthy();
  });
});
