import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdd1Component } from './student-add1.component';

describe('StudentAdd1Component', () => {
  let component: StudentAdd1Component;
  let fixture: ComponentFixture<StudentAdd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdd1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
