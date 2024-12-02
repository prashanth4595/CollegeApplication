import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { StudentdetailsComponent } from "../studentdetails/studentdetails.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{
  stdusername:any;

  selectedForm: string | null = null;
  studentForm!: FormGroup;
  teacherForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize Student Form
    this.studentForm = this.fb.group({
      hno: ['', Validators.required],
      password: ['', Validators.required],
    });

    // Initialize Teacher Form
    this.teacherForm = this.fb.group({
      tid: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // To display the selected form
  selectForm(form: string): void {
    this.selectedForm = form;
  }

  // Submit Student Form
  submitStudentForm(): void {
    if (this.studentForm.valid) {
      const loginData = this.studentForm.value;
      this.studentService.studentLogin(loginData).subscribe({
        next: (response: any) => {
          if (response) {
            console.log('Student login successful:', response);
            // Navigate to StudentDetailsComponent
            this.router.navigate(['/studentdetails']);
          } else {
            console.error('Invalid student credentials');
            alert('Invalid username or password for Student.');
          }
        },
        error: (error: any) => {
          console.error('Error during student login:', error);
          alert('An error occurred. Please try again.');
        },
      });
    }
  }
  

  // Submit Teacher Form
  submitTeacherForm(): void {
    if (this.teacherForm.valid) {
      const loginData = this.teacherForm.value;
      this.studentService.teacherLogin(loginData).subscribe({
        next: (response: any) => {
          if (response) {
            console.log('Teacher login successful:', response);
            this.router.navigate(['/teacherdetails']); // Navigate to TeacherDetailsComponent
          } else {
            console.error('Invalid teacher credentials');
            alert('Invalid username or password for Teacher.');
          }
        },
        error: (error: any) => {
          console.error('Error during teacher login:', error);
          alert('An error occurred. Please try again.');
        },
      });
    }
  }
}