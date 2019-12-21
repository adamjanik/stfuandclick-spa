import { TestBed } from '@angular/core/testing';

import { ApiConnectionsService } from './api-connections.service';

describe('ApiConnectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConnectionsService = TestBed.get(ApiConnectionsService);
    expect(service).toBeTruthy();
  });
});
