import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FreeGame!!';
  screenWidthMain!: number;
  controlWidthMain= 'title';

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidthMain = window.innerWidth;
    if (this.screenWidthMain < 768) {
      this.controlWidthMain = 'title-min';
    } else {
      this.controlWidthMain = 'title';
    }
  }

  redirectHome() {
    this.router.navigate(['/']);
  }
}
