import { Component } from '@angular/core';
import { AboutMeComponent as about} from '../about-me/about-me.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public selectNew() : void {
    console.log('menu clicked');
  }
}
