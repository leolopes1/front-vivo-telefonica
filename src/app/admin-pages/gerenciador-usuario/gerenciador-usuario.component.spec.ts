import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorUsuarioComponent } from './gerenciador-usuario.component';

describe('GerenciadorUsuarioComponent', () => {
  let component: GerenciadorUsuarioComponent;
  let fixture: ComponentFixture<GerenciadorUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciadorUsuarioComponent]
    });
    fixture = TestBed.createComponent(GerenciadorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
