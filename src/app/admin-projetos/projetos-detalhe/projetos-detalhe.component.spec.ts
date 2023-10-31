import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosDetalheComponent } from './projetos-detalhe.component';

describe('ProjetosDetalheComponent', () => {
  let component: ProjetosDetalheComponent;
  let fixture: ComponentFixture<ProjetosDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetosDetalheComponent]
    });
    fixture = TestBed.createComponent(ProjetosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
