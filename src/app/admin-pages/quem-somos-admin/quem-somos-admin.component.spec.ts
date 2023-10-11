import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSomosAdminComponent } from './quem-somos-admin.component';

describe('QuemSomosAdminComponent', () => {
  let component: QuemSomosAdminComponent;
  let fixture: ComponentFixture<QuemSomosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuemSomosAdminComponent]
    });
    fixture = TestBed.createComponent(QuemSomosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
