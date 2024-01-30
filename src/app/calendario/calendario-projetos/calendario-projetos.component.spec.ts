import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioProjetosComponent } from './calendario-projetos.component';

describe('CalendarioProjetosComponent', () => {
  let component: CalendarioProjetosComponent;
  let fixture: ComponentFixture<CalendarioProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarioProjetosComponent]
    });
    fixture = TestBed.createComponent(CalendarioProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
