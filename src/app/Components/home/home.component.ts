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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus tristique nulla at pellentesque. Phasellus at dolor leo. Nulla auctor nisl in leo imperdiet dictum. Aenean ultricies, dui nec feugiat porttitor, nisi velit iaculis sem, vel condimentum dolor nibh sit amet quam. Pellentesque venenatis sodales lacus at venenatis. Proin tincidunt ipsum nec mi rhoncus, at lacinia lorem dignissim. Suspendisse laoreet mi nec ex pharetra, non tincidunt lacus consequat. Curabitur mollis neque euismod, cursus massa rhoncus, posuere purus. Ut felis tellus, mollis eget ultrices vel, fringilla ut purus. Curabitur in pretium dolor. Etiam congue neque libero, et cursus nisi eleifend vel.',
    image: "null",
    link: 'https://google.ca'
  }

  protected project2 : project = {
    id: 2,
    name: 'Test Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus tristique nulla at pellentesque. Phasellus at dolor leo. Nulla auctor nisl in leo imperdiet dictum. Aenean ultricies, dui nec feugiat porttitor, nisi velit iaculis sem, vel condimentum dolor nibh sit amet quam. Pellentesque venenatis sodales lacus at venenatis. Proin tincidunt ipsum nec mi rhoncus, at lacinia lorem dignissim. Suspendisse laoreet mi nec ex pharetra, non tincidunt lacus consequat. Curabitur mollis neque euismod, cursus massa rhoncus, posuere purus. Ut felis tellus, mollis eget ultrices vel, fringilla ut purus. Curabitur in pretium dolor. Etiam congue neque libero, et cursus nisi eleifend vel.',
    image: "null",
    link: 'https://google.ca'
  }

  ngOnInit(): void {
    this.projects.push(this.project);
    this.projects.push(this.project2);
    console.log('number of projects: ', this.projects.length)
    console.log(this.project2.link)
  }


  
}
