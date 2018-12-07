import { TestBed } from '@angular/core/testing';

import { XianshiService } from './xianshi.service';

describe('XianshiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XianshiService = TestBed.get(XianshiService);
    expect(service).toBeTruthy();
  });
});
