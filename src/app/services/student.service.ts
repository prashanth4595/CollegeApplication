import { HttpClient ,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class StudentService
{
  updateStudentMarks(hno: any, currentMarks: any) {
    throw new Error('Method not implemented.');
  }
  private hno!: number; // Holds the username

  private teacherid!: number;
  // Set username
  setUsername(username:number) {
    this.hno = username;
  }
  setId(userid:number) {
    this.teacherid = userid;
  }

  // Get username
  getUsername(): number {
    return this.hno;
  }
  getId(): number {
    return this.teacherid;
  }

  private studentApiUrl = 'http://localhost:8080/student';
  private teacherApiUrl = 'http://localhost:8080/teachers';
  private marksApiUrl = 'http://localhost:8080/marks';

  constructor(private http: HttpClient) {}

//post student
  createStudent(data: any): Observable<any> {
    return this.http.post<any>(`${this.studentApiUrl}/post`, data);
  }

  //post teacher
  createTeacher(teacherData: any): Observable<any> {
    return this.http.post(`${this.teacherApiUrl}/post`, teacherData);
  }



  //get student by hallticketno
  getStudentByUsername(username: number): Observable<any> {
    return this.http.get<any>(`${this.studentApiUrl}/get/${username}`);
  }

  //get student by hallticketno
  getTeacherByUsername(username: number): Observable<any> {
    return this.http.get<any>(`${this.teacherApiUrl}/get/${username}`);
  }

  //get student Marks
  getMarks(hno:number): Observable<any> {
    return this.http.get(`${this.marksApiUrl}/get/${hno}`,);
  }
 

  getDetails(): Observable<any> {
    return this.http.get(`${this.teacherApiUrl}/get`,);
  }
//fetch student all
  getStudentData(): Observable<any> {
    return this.http.get<any>(`${this.studentApiUrl}/get`);
  }

  // Fetch teacher data all
  getTeacherData(): Observable<any> {
    return this.http.get<any>(`${this.teacherApiUrl}/get`);
  }

  // Student login validation
  studentLogin(loginData: {hno:number; password: string }): Observable<any> {
    this.setUsername(loginData.hno)
    return this.getStudentData().pipe(
      map((students) => students.find((student: any) =>
        student.hno === loginData.hno && student.password === loginData.password
      ))
    );
  }

  // Teacher login validation
  teacherLogin(loginData: { tid: number; password: string }): Observable<any> {
    this.setId(loginData.tid)
    return this.getTeacherData().pipe(
      map((teachers) => teachers.find((teacher: any) =>
        teacher.tid === loginData.tid && teacher.password === loginData.password
      ))
    );
  }


  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.studentApiUrl}/get`);
  }

  getStudentMarks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.marksApiUrl}/get`);
  }

  addMarks(hno: number, currentMarks?: any): Observable<any> {
    return this.http.post<any>(`${this.marksApiUrl}/marks/add`, { hno });
  }

  updateMarks(hno: number, marks: any) {
    return this.http.put(`${this.marksApiUrl}/studentmarks/${hno}`, marks);
  }

  deleteMarks(hno: number): Observable<any> {
    return this.http.delete<any>(`${this.marksApiUrl}/marks/delete/${hno}`);
  }
}

