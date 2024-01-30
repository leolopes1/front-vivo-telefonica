import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioReceitasComponent } from './calendario-receitas.component';

describe('CalendarioReceitasComponent', () => {
  let component: CalendarioReceitasComponent;
  let fixture: ComponentFixture<CalendarioReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarioReceitasComponent]
    });
    fixture = TestBed.createComponent(CalendarioReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
