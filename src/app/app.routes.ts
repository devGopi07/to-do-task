import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "addToDoItem", component: AddTodoItemComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home
    { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Wildcard route
];
