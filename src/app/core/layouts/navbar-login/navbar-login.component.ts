import {
  Component,
  HostListener,
  computed,
  input,
  signal,
} from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-login',
  standalone: true,
  imports: [LogoComponent, NgClass, RouterLink],
  templateUrl: './navbar-login.component.html',
  styleUrl: './navbar-login.component.scss',
})
export class NavbarLoginComponent {
  public screenWidth = signal<number>(0);
  protected isMobile = computed<boolean>(() => this.screenWidth() < 768);
  textLinkButton = input.required<string>();
  routerLinkButton = input.required<string>();

  constructor(private router: Router) {
    this.screenWidth.set(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth.set(window.innerWidth);
  }
}
