import { Component, inject, TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbDatepickerModule, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootMatTemplate';
  private offcanvasService = inject(NgbOffcanvas);

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'sidebar',
      panelClass: 'container-offcanvas',
    });
  }
}
