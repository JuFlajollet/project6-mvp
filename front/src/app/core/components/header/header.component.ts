import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('drawer')
  public drawer!: MatDrawer;

  constructor(
    private router: Router
  ) { }

  @HostListener("window:resize", []) updateChartSize() {
    if (window.innerWidth  >= 768) {
      this.drawer.close();
    }
  }
}
