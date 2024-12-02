import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmarksformComponent } from './studentmarksform.component';

describe('StudentmarksformComponent', () => {
  let component: StudentmarksformComponent;
  let fixture: ComponentFixture<StudentmarksformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmarksformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmarksformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
