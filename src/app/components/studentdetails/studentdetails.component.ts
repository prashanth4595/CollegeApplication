import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  imports: [  
    MatIconModule,
    CommonModule],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent{

  getusername:any;

  studentDetails: any = null; // To hold the logged-in student data
  menuOpen: boolean = false;  // To toggle the dropdown menu

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getusername=this.studentService.getUsername();
    // Fetch logged-in student details
    this.getStudentDetails(this.getusername);
  }

  getStudentDetails(data: any) {
    this.studentService.getStudentByUsername(data).subscribe({
      next: (data) => {
        if (data) {
          console.log('Fetched student details:', data);
          this.studentDetails = data; // Assign student data
        } else {
          console.error('No data found for the logged-in student.');
        }
      },
      error: (error) => {
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
    console.log('Result clicked');
    // Implement the logic to show the result, for now we just log it
  }

  // Handle click for Attendance
  showAttendance() {
    console.log('Attendance clicked');
    // Implement the logic to show attendance, for now we just log it
  }
}