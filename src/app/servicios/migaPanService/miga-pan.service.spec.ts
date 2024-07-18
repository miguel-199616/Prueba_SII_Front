import { TestBed } from '@angular/core/testing';

import { MigaPanService } from './miga-pan.service';

describe('MigaPanService', () => {
  let service: MigaPanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigaPanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
