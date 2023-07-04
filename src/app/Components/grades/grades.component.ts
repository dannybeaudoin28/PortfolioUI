import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { GradesService } from 'src/app/Services/grades.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  constructor(private gradesService: GradesService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  gpa: number = 3.63;
  courses: any[] = [];
  sortNameAsc: boolean = true;
  sortDescAsc: boolean = true;
  sortGradeAsc: boolean = true;
  sortYearAsc: boolean = true;

  private getCourses(): void {
    this.gradesService.getAllCourses().subscribe(response => {
      // console.log(response)
      this.courses = response;
    });
  }

  //TODO: Add flags, and logic for sorting by description, grade, and year of study
  protected sortByName(): void {
    if (this.sortNameAsc === true) {
      this.courses.sort((a, b) => (a.name > b.name ? -1 : 1));
    } else {
      this.courses.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
    this.sortNameAsc = !this.sortNameAsc;
  }

  protected sortByYear(): void {  
    if (this.sortYearAsc === true) {
      this.courses.sort((a, b) => (a.year > b.year ? -1 : 1));
    } else {
      this.courses.sort((a, b) => (a.year < b.year ? -1 : 1));
    }
    this.sortYearAsc = !this.sortYearAsc;
  }

  protected sortByGrade(): void {
    if (this.sortGradeAsc === true) {
      this.courses.sort((a, b) => (a.grade > b.grade ? -1 : 1));
    } else {
      this.courses.sort((a, b) => (a.grade < b.grade ? -1 : 1));
    }
    this.sortGradeAsc = !this.sortGradeAsc;
  }

  protected sortByDesc(): void {
    if (this.sortDescAsc === true) {
      this.courses.sort((a, b) => (a.desc > b.desc ? -1 : 1));
    } else {
      this.courses.sort((a, b) => (a.desc < b.desc ? -1 : 1));
    }
    this.sortDescAsc = !this.sortDescAsc;
  }

  //TODO: Add Search functionality to search courses by identifier
  //TODO: Make each course clickable
}
