import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { GradesService } from 'src/app/Services/grades.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit{
  constructor(private gradesService : GradesService) {}
  
  ngOnInit(): void {
    this.getCourses();
  }

  gpa: number = 3.63;
  courses: any[] = []; 

  private getCourses(): void {
    this.gradesService.getAllCourses().subscribe(response => {
      // console.log(response)
      this.courses = response;
    });
  }

}
