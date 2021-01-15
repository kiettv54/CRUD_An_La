import { TestBed } from '@angular/core/testing';

import { ComponentShareService } from './component-share.service';

describe('ComponentShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentShareService = TestBed.get(ComponentShareService);
    expect(service).toBeTruthy();
  });
});
