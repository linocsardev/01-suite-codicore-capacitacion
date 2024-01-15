import { TestBed } from '@angular/core/testing';

import { SharedControlService } from './shared-control.service';

describe('SharedControlService', () => {
  let service: SharedControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
