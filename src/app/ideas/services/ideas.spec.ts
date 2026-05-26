import { TestBed } from '@angular/core/testing';

import { Ideas } from './ideas';

describe('Ideas', () => {
  let service: Ideas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ideas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
