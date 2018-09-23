import { TestBed, inject } from '@angular/core/testing';

import { OrchestrationService } from './orchestration.service';

describe('OrchestrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrchestrationService]
    });
  });

  it('should be created', inject([OrchestrationService], (service: OrchestrationService) => {
    expect(service).toBeTruthy();
  }));
});
