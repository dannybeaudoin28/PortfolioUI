import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/Models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected projects : Array<project> = [];
  protected project : project = {
    id: 1,
    name: 'Test Project',
    description: 'This is my first test subject in this component',
    image: "null",
    link: 'https://google.ca'
  }

  protected project2 : project = {
    id: 2,
    name: 'Test Project 1',
    description: 'This is my second test subject in this component',
    image: "null",
    link: 'https://google.ca'
  }

  ngOnInit(): void {
    this.projects.push(this.project);
    this.projects.push(this.project2);
    console.log('number of projects: ', this.projects.length)
  }


  
}
