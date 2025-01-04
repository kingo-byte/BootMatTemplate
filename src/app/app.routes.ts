import { Routes } from '@angular/router';

export const routes: Routes = [
     {
        path: 'auth',
        loadChildren: () =>
          import('./Modules/auth/auth.module').then((m) => m.AuthModule),
     },
     {
        path: 'home',
        loadChildren: () =>
          import('./Modules/home/home.module').then((m) => m.HomeModule),
     },
     {
        path: 'in-bound-calls',
        loadChildren: () =>
          import('./Modules/in-bound-calls/in-bound-calls.module').then((m) => m.InBoundCallsModule),
     },
     {
        path: 'out-bound-calls',
        loadChildren: () =>
          import('./Modules/out-bound-calls/out-bound-calls.module').then((m) => m.OutBoundCallsModule),
     },
    {
        path: '**', redirectTo: 'auth'
    }    
];
