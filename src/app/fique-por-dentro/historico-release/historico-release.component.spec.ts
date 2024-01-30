import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoReleaseComponent } from './historico-release.component';

describe('HistoricoReleaseComponent', () => {
  let component: HistoricoReleaseComponent;
  let fixture: ComponentFixture<HistoricoReleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoReleaseComponent]
    });
    fixture = TestBed.createComponent(HistoricoReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
