import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    let ticket: string | null = this.route.snapshot.queryParamMap.get('ticket');

    //prevent the user from going back to here if he already has a token
    if(this.authService.getToken()){
      console.log('User already has a token');
      this.router.navigate(['/main']);
      return;
    } 

    if(!ticket) {
      throw new Error('Ticket is required');
      //go back to dashboard
    }

    this.authService.authenticate(ticket!).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.authService.setTicket(ticket!);         
        this.router.navigate(['/main']); 
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
