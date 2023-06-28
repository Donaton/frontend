import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCasoPageComponent } from './crear-caso-page.component';

describe('CrearCasoPageComponent', () => {
  let component: CrearCasoPageComponent;
  let fixture: ComponentFixture<CrearCasoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCasoPageComponent]
    });
    fixture = TestBed.createComponent(CrearCasoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
