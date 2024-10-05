import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TestFormComponent } from './Components/test-form/test-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'test-form', component: TestFormComponent},
    {path: '**', redirectTo: ''}    
];
