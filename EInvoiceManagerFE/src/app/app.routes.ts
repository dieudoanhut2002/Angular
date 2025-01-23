import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    {
        path:``,
        redirectTo: `login`,
        pathMatch: 'full'
    },
    {
        path:`login`,
        component: LoginComponent
    },
    {
        path:`services`,
component: ServicesComponent
    }
];
