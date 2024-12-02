import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdeatailsComponent } from './teacherdeatails.component';

describe('TeacherdeatailsComponent', () => {
  let component: TeacherdeatailsComponent;
  let fixture: ComponentFixture<TeacherdeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherdeatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherdeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
