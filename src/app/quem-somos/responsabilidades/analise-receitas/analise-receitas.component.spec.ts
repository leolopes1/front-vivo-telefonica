import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseReceitasComponent } from './analise-receitas.component';

describe('AnaliseReceitasComponent', () => {
  let component: AnaliseReceitasComponent;
  let fixture: ComponentFixture<AnaliseReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaliseReceitasComponent]
    });
    fixture = TestBed.createComponent(AnaliseReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
