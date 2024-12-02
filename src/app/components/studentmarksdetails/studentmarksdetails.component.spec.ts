import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmarksdetailsComponent } from './studentmarksdetails.component';

describe('StudentmarksdetailsComponent', () => {
  let component: StudentmarksdetailsComponent;
  let fixture: ComponentFixture<StudentmarksdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmarksdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmarksdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
