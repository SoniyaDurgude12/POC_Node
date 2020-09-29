import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLazyLoadingComponent } from './student-lazy-loading.component';

describe('StudentLazyLoadingComponent', () => {
  let component: StudentLazyLoadingComponent;
  let fixture: ComponentFixture<StudentLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
