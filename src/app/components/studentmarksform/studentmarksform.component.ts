import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentmarksform',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './studentmarksform.component.html',
  styleUrls: ['./studentmarksform.component.css'],
})
export class StudentmarksformComponent implements OnInit {
  students:any[] = []; // Array of student details
  studentmarks:any[] = []; // Array of student marks
  subjects = ['Telugu', 'Hindi', 'English', 'Mathes', 'Phisics', 'Chemistry', 'Social'];
  showForm = false;
  formType: 'add' | 'update' = 'add';
  currentStudent: any = null; // Holds the student being edited
  currentMarks: any = {}; // Holds the marks for the form

  constructor(private studentService: StudentService) {
    this.fetchStudents();
    this.fetchStudentMarks();
  }
  ngOnInit(): void {
    
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

  fetchStudentMarks() {
    this.studentService.getStudentMarks().subscribe((data: any[]) => {
      this.studentmarks = data;
    });
  }

  calculateTotalMarks(student: any) {
    return this.subjects.reduce((total, subject) => total + (student[subject] || 0), 0);
  }

  calculateGrade(student: any) {
    const total = this.calculateTotalMarks(student);
    const avg = total / this.subjects.length;
    if (avg >= 90) return 'A';
    if (avg >= 75) return 'B';
    if (avg >= 50) return 'C';
    return 'D';
  }

  openForm(type: 'add' | 'update', student: any = null) {
    this.formType = type;
    this.currentStudent = student;
    this.currentMarks = student ? { ...student } : {}; // Pre-fill for update
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.currentStudent = null;
    this.currentMarks = {};
  }

  submitMarksForm() {
    if (this.formType === 'add') {
      const newMarks = {
        hno: this.currentStudent.hno,
        ...this.currentMarks,
      };
      this.studentService.addMarks(newMarks).subscribe(() => {
        this.fetchStudentMarks();
        this.closeForm();
      });
    } else if (this.formType === 'update') {
      this.studentService
        .updateMarks(this.currentStudent.hno, this.currentMarks)
        .subscribe(() => {
          this.fetchStudentMarks();
          this.closeForm();
        });
    }
  }

  deleteStudent(student: any) {
    this.studentService.deleteMarks(student.hno).subscribe(() => {
      this.fetchStudents();
      this.fetchStudentMarks();
    });
  }
}