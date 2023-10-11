import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoUsuarioComponent } from './criacao-usuario.component';

describe('CriacaoUsuarioComponent', () => {
  let component: CriacaoUsuarioComponent;
  let fixture: ComponentFixture<CriacaoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriacaoUsuarioComponent]
    });
    fixture = TestBed.createComponent(CriacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
