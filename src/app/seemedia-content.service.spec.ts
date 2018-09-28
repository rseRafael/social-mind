import { TestBed, inject } from '@angular/core/testing';

import { SeemediaContentService } from './seemedia-content.service';

describe('SeemediaContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeemediaContentService]
    });
  });

  it('should be created', inject([SeemediaContentService], (service: SeemediaContentService) => {
    expect(service).toBeTruthy();
  }));
});
