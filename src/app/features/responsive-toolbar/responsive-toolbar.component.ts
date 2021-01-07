import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss'],
})
export class ResponsiveToolbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      isDisabled: false,
      routerLink: ''
    },
    {
      label: 'Interview',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      isDisabled: false,
      routerLink: 'interview'
    },
    {
      label: 'Learnings',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      isDisabled: false,
      routerLink: 'learnings'
    },
    {
      label: 'Upload Que',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      isDisabled: false,
      routerLink: 'uploadque'
    },
    {
      label: 'Upload Learnings',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: false,
      isDisabled: false,
      routerLink: 'uploadlrn'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
