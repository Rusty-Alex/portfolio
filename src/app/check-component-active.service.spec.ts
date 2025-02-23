import { TestBed } from '@angular/core/testing';

import { CheckComponentActiveService } from './check-component-active.service';

describe('CheckComponentActiveService', () => {
  let service: CheckComponentActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckComponentActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
