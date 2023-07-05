import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { GradesComponent } from './Components/grades/grades.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './Components/course/course.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    GradesComponent,
    CourseComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
