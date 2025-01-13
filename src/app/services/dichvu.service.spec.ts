/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DichvuService } from './dichvu.service';

describe('Service: Dichvu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DichvuService]
    });
  });

  it('should ...', inject([DichvuService], (service: DichvuService) => {
    expect(service).toBeTruthy();
  }));
});
