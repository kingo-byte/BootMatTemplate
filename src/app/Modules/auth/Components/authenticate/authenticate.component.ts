import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    this.authService.authenticate().subscribe({
      next: (response) => {
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/main']); 
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
