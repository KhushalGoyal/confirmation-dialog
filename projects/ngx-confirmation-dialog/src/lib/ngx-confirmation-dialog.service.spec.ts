import { TestBed } from '@angular/core/testing';

import { NgxConfirmationDialogService } from './ngx-confirmation-dialog.service';

describe('NgxConfirmationDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxConfirmationDialogService = TestBed.get(NgxConfirmationDialogService);
    expect(service).toBeTruthy();
  });
});
