import { Component, computed, effect} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './Modules/auth/auth.module';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = 'BootMatTemplate';
}
