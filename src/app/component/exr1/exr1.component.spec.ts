import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exr1Component } from './exr1.component';

describe('Exr1Component', () => {
  let component: Exr1Component;
  let fixture: ComponentFixture<Exr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exr1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
