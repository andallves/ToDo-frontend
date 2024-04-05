import { Component } from '@angular/core';
import {sidebarData} from "src/app/core/layouts/sidebar/nav-data";
import {ISidebar} from "src/app/core/models/sidebar.models";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  collapsed = false;
  navData: ISidebar[] = sidebarData;
}
