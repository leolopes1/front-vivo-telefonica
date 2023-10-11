import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleUsuarioComponent } from './controle-usuario.component';

describe('ControleUsuarioComponent', () => {
  let component: ControleUsuarioComponent;
  let fixture: ComponentFixture<ControleUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleUsuarioComponent]
    });
    fixture = TestBed.createComponent(ControleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
