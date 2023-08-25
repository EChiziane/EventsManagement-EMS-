/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {EventoService} from './evento.service';

describe('Service: Evento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventoService]
    });
  });

  it('should ...', inject([EventoService], (service: EventoService) => {
    expect(service).toBeTruthy();
  }));
});
