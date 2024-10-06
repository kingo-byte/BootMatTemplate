import { Component, inject, TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDatepickerModule, NgbDropdownModule, NavbarComponent, NavbarComponent, FontAwesomeModule, NgbCollapseModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  faBars = faBars;
  isDashboardCollapsed = true;

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'sidebar',
      panelClass: 'container-offcanvas',
    });
  }
}
