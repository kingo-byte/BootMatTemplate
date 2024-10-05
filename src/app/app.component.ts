import { Component} from '@angular/core';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
     RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootMatTemplate';
}
