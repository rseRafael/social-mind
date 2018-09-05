import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMediaComponent } from './see-media.component';

describe('SeeMediaComponent', () => {
  let component: SeeMediaComponent;
  let fixture: ComponentFixture<SeeMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
