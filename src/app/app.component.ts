import { Component} from '@angular/core';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootMatTemplate';
}
