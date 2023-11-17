import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosDuvidaComponent } from './projetos-duvida.component';

describe('ProjetosDuvidaComponent', () => {
  let component: ProjetosDuvidaComponent;
  let fixture: ComponentFixture<ProjetosDuvidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetosDuvidaComponent]
    });
    fixture = TestBed.createComponent(ProjetosDuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
