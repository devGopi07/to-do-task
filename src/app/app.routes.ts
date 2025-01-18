import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewByIdComponent } from './view-by-id/view-by-id.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'add', component: AddComponent },
            { path: 'view-item/:id', component: ViewByIdComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
            { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Wildcard route

        ],
    },
];
