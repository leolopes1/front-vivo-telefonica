import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossoProcessoComponent } from './nosso-processo.component';

describe('NossoProcessoComponent', () => {
  let component: NossoProcessoComponent;
  let fixture: ComponentFixture<NossoProcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NossoProcessoComponent]
    });
    fixture = TestBed.createComponent(NossoProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
