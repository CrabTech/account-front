import { TestBed } from '@angular/core/testing';

import { AgenciaServiceService } from './agencia-service.service';

describe('AgenciaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgenciaServiceService = TestBed.get(AgenciaServiceService);
    expect(service).toBeTruthy();
  });
});
