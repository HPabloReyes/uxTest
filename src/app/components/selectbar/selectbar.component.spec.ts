import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbarComponent } from './selectbar.component';

describe('SelectbarComponent', () => {
  let component: SelectbarComponent;
  let fixture: ComponentFixture<SelectbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectbarComponent]
    });
    fixture = TestBed.createComponent(SelectbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
