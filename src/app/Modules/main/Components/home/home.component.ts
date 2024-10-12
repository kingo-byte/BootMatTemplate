import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthRoutingModule } from '../../../auth/auth-routing.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AuthRoutingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
