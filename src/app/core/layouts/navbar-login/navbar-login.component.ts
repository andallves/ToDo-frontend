import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  computed,
} from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-navbar-login',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar-login.component.html',
  styleUrl: './navbar-login.component.scss',
})
export class NavbarLoginComponent {
  @ViewChild('navbar') navbarWidth!: ElementRef;
  protected screenWidth!: number;
  protected isMobile = computed(() => this.screenWidth < 578);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = this.navbarWidth.nativeElement.innerWidth;
    console.log(this.screenWidth);
  }
}
