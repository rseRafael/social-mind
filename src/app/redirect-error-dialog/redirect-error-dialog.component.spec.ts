import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectErrorDialogComponent } from './redirect-error-dialog.component';

describe('RedirectErrorDialogComponent', () => {
  let component: RedirectErrorDialogComponent;
  let fixture: ComponentFixture<RedirectErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
