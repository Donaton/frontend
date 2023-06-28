import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaPageComponent } from './evidencia-page.component';

describe('EvidenciaPageComponent', () => {
  let component: EvidenciaPageComponent;
  let fixture: ComponentFixture<EvidenciaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenciaPageComponent]
    });
    fixture = TestBed.createComponent(EvidenciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
