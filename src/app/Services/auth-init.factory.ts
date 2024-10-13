import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';

export function initializeAppFactory(authService: AuthService): () => Promise<void> {
  return async () => {
    try {
        if(!sessionStorage.getItem('token')) {
            const response: any = await firstValueFrom(authService.authenticate());
            sessionStorage.setItem('token', response.token);
            console.log('Authentication successful:', response);
        }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
}
