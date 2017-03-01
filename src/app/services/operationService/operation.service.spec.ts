import { TestBed, inject } from '@angular/core/testing';
import { OperationService } from './operation.service.ts';

describe('OperationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationService]
    });
  });

  it('should ...', inject([OperationService], (service: OperationService) => {
    expect(service).toBeTruthy();
  }));
});
