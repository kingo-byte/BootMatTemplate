import { Component, inject, TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faHome, faGauge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDatepickerModule, NgbDropdownModule, NavbarComponent, NavbarComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  faBars = faBars;
  faHome = faHome;
  faGauge = faGauge;

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'sidebar',
      panelClass: 'container-offcanvas',
    });
  }
}
