import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [NgbNavModule, FormsModule, CommonModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {
  active = 1;
}
