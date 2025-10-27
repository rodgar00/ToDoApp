import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendiendoBootstrap } from './aprendiendo-bootstrap';

describe('AprendiendoBootstrap', () => {
  let component: AprendiendoBootstrap;
  let fixture: ComponentFixture<AprendiendoBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendiendoBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprendiendoBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
