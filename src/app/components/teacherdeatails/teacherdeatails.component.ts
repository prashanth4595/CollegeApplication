import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacherdeatails',
  imports: [
    MatIconModule,CommonModule
  ],
  templateUrl: './teacherdeatails.component.html',
  styleUrl: './teacherdeatails.component.css'
})
export class TeacherdeatailsComponent 
{
  getid!: number;

  teacherDetails: any = null; // To hold the logged-in student data
  menuOpen: boolean = false;  // To toggle the dropdown menu

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getid=this.studentService.getId();
    // Fetch logged-in student details
    this.getStudentDetails(this.getid);
  }

  getStudentDetails(data:number) {
    this.studentService.getTeacherByUsername(data).subscribe({
      next: (data: any) => {
        if (data) {
          console.log('Fetched student details:', data);
          this.teacherDetails = data; // Assign student data
        } else {
          console.error('No data found for the logged-in student.');
        }
      },
      error: (error: any) => {
        console.error('Error fetching student details:', error);
        alert('Unable to fetch student details. Please try again.');
        this.router.navigate(['/login']); // Redirect to login if error occurs
      },
    });
  }

  // Toggle the dropdown menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Handle click for Result
  showResult() {
    this.router.navigate(['/marks']);
  }

  // Handle click for Attendance
  showAttendance() {
    console.log('Attendance clicked');
    // Implement the logic to show attendance, for now we just log it
  }
}

