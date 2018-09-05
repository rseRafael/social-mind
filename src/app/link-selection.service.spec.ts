import { TestBed, inject } from '@angular/core/testing';

import { LinkSelectionService } from './link-selection.service';

describe('LinkSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkSelectionService]
    });
  });

  it('should be created', inject([LinkSelectionService], (service: LinkSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
