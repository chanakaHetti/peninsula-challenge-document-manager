import { TestBed } from '@angular/core/testing';

import { FileSortService } from './file-sort.service';

describe('FileSortService', () => {
  let service: FileSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
