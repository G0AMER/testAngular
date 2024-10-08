import { TestBed } from '@angular/core/testing';

import { EvntService } from './evnt.service';

describe('EvntService', () => {
  let service: EvntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
