import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute) { }
  id: any = '';

  ngOnInit(): void {
    if(this._Activatedroute.snapshot.paramMap.get("courseId") != null) {
      this.id=this._Activatedroute.snapshot.params["courseId"];
    }
  }

}
