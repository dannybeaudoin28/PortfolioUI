import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>('http://34.201.134.147:8888/getCourse/' + id);
  }

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://34.201.134.147:8888/getAllCourses');
  }

  //test sdfasdfasdf
}
