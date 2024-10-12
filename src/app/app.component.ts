import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './Modules/auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootMatTemplate';
}
