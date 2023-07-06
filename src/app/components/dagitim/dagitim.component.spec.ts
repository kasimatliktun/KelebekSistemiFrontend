import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagitimComponent } from './dagitim.component';

describe('DagitimComponent', () => {
  let component: DagitimComponent;
  let fixture: ComponentFixture<DagitimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DagitimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
