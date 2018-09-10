import { TestBed, inject } from '@angular/core/testing';

import { LayoutChangesService } from './layout-changes.service';

describe('LayoutChangesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutChangesService]
    });
  });

  it('should be created', inject([LayoutChangesService], (service: LayoutChangesService) => {
    expect(service).toBeTruthy();
  }));
});
