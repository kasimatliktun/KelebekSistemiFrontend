import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentImageComponent } from './student-image.component';

describe('StudentImageComponent', () => {
  let component: StudentImageComponent;
  let fixture: ComponentFixture<StudentImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
