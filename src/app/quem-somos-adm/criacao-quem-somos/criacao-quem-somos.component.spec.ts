import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoQuemSomosComponent } from './criacao-quem-somos.component';

describe('CriacaoQuemSomosComponent', () => {
  let component: CriacaoQuemSomosComponent;
  let fixture: ComponentFixture<CriacaoQuemSomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriacaoQuemSomosComponent]
    });
    fixture = TestBed.createComponent(CriacaoQuemSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
