import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeFormComponent } from './atividade-form.component';

describe('AtividadeFormComponent', () => {
  let component: AtividadeFormComponent;
  let fixture: ComponentFixture<AtividadeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeFormComponent]
    });
    fixture = TestBed.createComponent(AtividadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
