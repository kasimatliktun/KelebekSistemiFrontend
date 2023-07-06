import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagitimDtoComponent } from './dagitim-dto.component';

describe('DagitimDtoComponent', () => {
  let component: DagitimDtoComponent;
  let fixture: ComponentFixture<DagitimDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DagitimDtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagitimDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
