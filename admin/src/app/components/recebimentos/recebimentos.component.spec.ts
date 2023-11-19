import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosComponent } from './recebimentos.component';

describe('RecebimentosComponent', () => {
  let component: RecebimentosComponent;
  let fixture: ComponentFixture<RecebimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecebimentosComponent]
    });
    fixture = TestBed.createComponent(RecebimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
