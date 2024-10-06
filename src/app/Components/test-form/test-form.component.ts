import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [CommonModule, NgbNavModule, FormsModule, DataTablesModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})

export class TestFormComponent {
  dtOptions: Config = {
    pagingType: 'full_numbers',
  };
  active = 1;
}