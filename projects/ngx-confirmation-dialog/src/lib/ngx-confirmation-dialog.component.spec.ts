import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConfirmationDialogComponent } from './ngx-confirmation-dialog.component';

describe('NgxConfirmationDialogComponent', () => {
  let component: NgxConfirmationDialogComponent;
  let fixture: ComponentFixture<NgxConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
