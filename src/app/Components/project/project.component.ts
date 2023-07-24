import { Component, Input, OnInit } from '@angular/core';
import { project } from 'src/app/Models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() proj !: project;
  protected hasLink: boolean = false;
  protected hasImage: boolean = false;
  

  ngOnInit(): void {
    console.log('inside project component')
    if (this.proj != null) {
      console.log('Project: ', this.proj.link);
      if (this.proj.image != null) this.hasImage = !this.hasImage;
      if (this.proj.link != null) this.hasLink = !this.hasLink;
    }
  }

}
