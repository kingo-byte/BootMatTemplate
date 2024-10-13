import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export function initializeAppFactory(authService: AuthService): () => Promise<void> {
  return async () => {
    try {
      if (!sessionStorage.getItem('token')) {
        // Parse query parameters directly from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');

        if (!userId) {
          throw new Error('User ID not found in route parameters');
        }

        // Authenticate the user using the retrieved userId
        const response: any = await firstValueFrom(authService.authenticate(userId));
        sessionStorage.setItem('token', response.token);
        authService.populateloggedInUser(response.token);

        console.log('Authentication successful:', response);
      } else {
        // Ensure the user remains authenticated on page refresh
        const token = sessionStorage.getItem('token');
        authService.populateloggedInUser(token!);
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      // Optionally, handle redirection or user notification here
    }
  };
}
