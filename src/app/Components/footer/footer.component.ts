import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) {}

  linkedIn: string = 'https://www.linkedin.com/in/danny-beaudoin-27bba6154/';
  gitHub: string = 'https://github.com/dannybeaudoin28';

  protected navigateToAbout() {
    this.router.navigate(['/about']);
  }

  protected navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
