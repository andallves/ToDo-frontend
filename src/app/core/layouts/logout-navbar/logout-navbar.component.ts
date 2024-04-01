import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-logout-navbar',
  templateUrl: './logout-navbar.component.html',
  styleUrls: ['./logout-navbar.component.scss']
})
export class LogoutNavbarComponent {
  screenWidth: number;

  contructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: EventListener) {
    this.screenWidth = window.innerWidth;
  }
}
