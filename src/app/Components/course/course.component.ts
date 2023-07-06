import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { GradesService } from 'src/app/Services/grades.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute, private gradesService: GradesService) { }
  id: any = '';
  course: any;

  ngOnInit(): void {
    if(this._Activatedroute.snapshot.paramMap.get("courseId") != null) {
      this.id=this._Activatedroute.snapshot.params["courseId"];

      this.getCourseById(this.id);
    }
  }

  getCourseById(id : string) {
    this.gradesService.getCourseById(id).subscribe(response => {
      this.course = response;
      // console.log(this.course);asdf fdsg
    });
  }

}
