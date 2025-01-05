import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Components/navbar/navbar.component';
import { InBoundCallsRoutingModule } from '../in-bound-calls-routing.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, InBoundCallsRoutingModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
