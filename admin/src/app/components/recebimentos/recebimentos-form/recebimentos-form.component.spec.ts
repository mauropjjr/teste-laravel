import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosFormComponent } from './recebimentos-form.component';

describe('RecebimentosFormComponent', () => {
  let component: RecebimentosFormComponent;
  let fixture: ComponentFixture<RecebimentosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecebimentosFormComponent]
    });
    fixture = TestBed.createComponent(RecebimentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
