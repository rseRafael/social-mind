import { TestBed, inject } from '@angular/core/testing';

import { RouteControllerService } from './route-controler.service';

describe('RouteControlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteControllerService]
    });
  });

  it('should be created', inject([RouteControllerService], (service: RouteControllerService) => {
    expect(service).toBeTruthy();
  }));
});
