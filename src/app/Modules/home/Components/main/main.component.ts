import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../Components/navbar/navbar.component';
import { HomeRoutingModule } from '../../home-routing.module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
