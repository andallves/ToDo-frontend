import {ISidebar} from "src/app/core/models/sidebar.models";

export const sidebarData = [
  {
    routeLink: 'dashboard',
    icon: 'inbox',
    label: 'Tarefas'
  },
  {
    routerLink: 'list',
    icon: 'list',
    label: 'Listas'
  }
] as ISidebar[];
