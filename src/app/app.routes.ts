import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
          import('./Modules/auth/auth.module').then((m) => m.AuthModule),
     },
    {
      path: 'main',
      loadChildren: () =>
        import('./Modules/main/main.module').then((m) => m.MainModule),
    },
    {path: '**', redirectTo: 'main'}    
];
