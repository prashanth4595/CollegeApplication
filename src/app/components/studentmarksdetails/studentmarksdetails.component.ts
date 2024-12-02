import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentmarksdetails',
  imports: [CommonModule],
  templateUrl: './studentmarksdetails.component.html',
  styleUrl: './studentmarksdetails.component.css'
})
export class StudentmarksdetailsComponent 
{

  subjects = [
    { name: 'Telugu', marks: 0 },
    { name: 'Hindi', marks: 0 },
    { name: 'English', marks: 0 },
    { name: 'Mathematics', marks: 0 },
    { name: 'Science', marks: 0 },
    { name: 'Social', marks: 0 },
    
  ];
  totalMarks: number = 0;
  grade: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentMarks();
  }

  getStudentMarks(): void {
    this.studentService.getMarks(this.studentService.getUsername()).subscribe((marksData: any) => {
      console.log(marksData);
  
      // Map the marks from the response to the respective subjects
      this.subjects = [
        { name: 'Telugu', marks: marksData.telugu || 0 },
        { name: 'Hindi', marks: marksData.hindi || 0 },
        { name: 'English', marks: marksData.english || 0 },
        { name: 'Mathes', marks: marksData.mathes || 0 },
        { name: 'Chemistry', marks: marksData.chemistry || 0 },
        { name: 'Phisics', marks: marksData.phisics || 0 },
        { name: 'Social', marks: marksData.social || 0 },
      ];
  
      // Calculate total marks and grade
      this.calculateTotalAndGrade();
    });
  }

  calculateTotalAndGrade(): void {
    this.totalMarks = this.subjects.reduce((sum, subject) => sum + subject.marks, 0);

    const percentage = (this.totalMarks / (this.subjects.length * 100)) * 100;


    if (this.totalMarks >= 100) {
      this.grade = 'A+';
    } else if (this.totalMarks >= 80) {
      this.grade = 'A';
    } else if (this.totalMarks >= 60) {
      this.grade = 'B';
    } else if (this.totalMarks >= 50) {
      this.grade = 'C';
    } else {
      this.grade = 'F';
    }
  }
}

