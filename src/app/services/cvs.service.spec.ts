/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CvsService } from './cvs.service';

describe('Service: Cvs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvsService]
    });
  });

  it('should ...', inject([CvsService], (service: CvsService) => {
    expect(service).toBeTruthy();
  }));
});
