import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosResponsabilidadesComponent } from './projetos-responsabilidades.component';

describe('ProjetosResponsabilidadesComponent', () => {
  let component: ProjetosResponsabilidadesComponent;
  let fixture: ComponentFixture<ProjetosResponsabilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetosResponsabilidadesComponent]
    });
    fixture = TestBed.createComponent(ProjetosResponsabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
