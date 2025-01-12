import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-todo-item',
  imports: [],
  standalone: true, // Ensure it's a standalone component
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css'
})
export class AddTodoItemComponent {
  title: string;
  constructor(private homeService: HomeService) {
    this.title = this.homeService.getMessage("This Is Add Todo Item Page")
  }
}