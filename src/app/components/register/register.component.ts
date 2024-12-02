import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [StudentService],
})
export class RegisterComponent 
{
  selectedForm: string | null = null;
  studentForm!: FormGroup;
  teacherForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    // Initialize Student Form
    this.studentForm = this.fb.group({
      hno: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      branch: ['', Validators.required]
    });

    // Initialize Teacher Form
    this.teacherForm = this.fb.group({
      tid: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      subject: ['', Validators.required]
    });
  }

  // To display the selected form
  selectForm(form: string): void {
    this.selectedForm = form;
  }

  // Submit Student Form
  submitStudentForm(): void {
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe({
        next: (response: any) => console.log('Student added:', response),
        error: (error: any) => console.error('Error:', error)
      });
    }
  }

  // Submit Teacher Form
  submitTeacherForm(): void {
    if (this.teacherForm.valid) {
      this.studentService.createTeacher(this.teacherForm.value).subscribe({
        next: (response: any) => console.log('Teacher added:', response),
        error: (error: any) => console.error('Error:', error)
      });
    }
  }
}