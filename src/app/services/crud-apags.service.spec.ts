import { TestBed } from '@angular/core/testing';

import { CRUDApagsService } from './crud-apags.service';

describe('CRUDApagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CRUDApagsService = TestBed.get(CRUDApagsService);
    expect(service).toBeTruthy();
  });
});
