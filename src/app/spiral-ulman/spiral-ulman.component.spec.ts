import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralUlmanComponent } from './spiral-ulman.component';

describe('SpiralUlmanComponent', () => {
  let component: SpiralUlmanComponent;
  let fixture: ComponentFixture<SpiralUlmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiralUlmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiralUlmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
