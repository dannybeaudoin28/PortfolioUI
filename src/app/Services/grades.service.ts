import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://127.0.0.1:8888/getAllCourses')
  }
}
