import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Components/navbar/navbar.component';
import { OutBoundCallsRoutingModule } from '../out-bound-calls-routing.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, OutBoundCallsRoutingModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
