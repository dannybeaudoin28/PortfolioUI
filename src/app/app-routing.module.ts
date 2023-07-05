import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { GradesComponent } from './Components/grades/grades.component';
import { CourseComponent } from './Components/course/course.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'course/:courseId', component: CourseComponent },
  { path: 'contact', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
