import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdsectionComponent } from './thirdsection.component';

describe('ThirdsectionComponent', () => {
  let component: ThirdsectionComponent;
  let fixture: ComponentFixture<ThirdsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdsectionComponent]
    });
    fixture = TestBed.createComponent(ThirdsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
