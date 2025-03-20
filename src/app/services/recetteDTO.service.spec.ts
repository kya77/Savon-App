import { TestBed } from '@angular/core/testing';

import { RecetteDTOService } from './recetteDTO.service';

describe('RecetteService', () => {
  let service: RecetteDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetteDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
