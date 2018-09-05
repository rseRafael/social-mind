import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaOptionsComponent } from './media-options.component';

describe('MediaOptionsComponent', () => {
  let component: MediaOptionsComponent;
  let fixture: ComponentFixture<MediaOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
