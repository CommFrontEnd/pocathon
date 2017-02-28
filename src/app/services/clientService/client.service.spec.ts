import { TestBed, inject } from '@angular/core/testing';
import { ClientServiceService } from './client.service.ts';

describe('ClientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientServiceService]
    });
  });

  it('should ...', inject([ClientServiceService], (service: ClientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
