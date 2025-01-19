import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  newTodo: { [key: string]: string } = {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    tags: '',
  };
  todoItems: any = [];
  objKeys: string[] = [];

  constructor(private homeService: HomeService, private router: Router) { }

  consoleLog(param: any) {
    console.log(param)

    if (Object.values(this.newTodo).every(value => value !== '' && value !== null)) {
      this.todoItems.push(param)
      console.log("console.log(newTodo)", this.todoItems)
      this.router.navigate(['/home']);
    }
    else {
      console.log(" Some of the fields are Null")
    }


  }

  ngOnInit(): void {
    // Fetch todo items and log them
    this.homeService.getToDoItems().subscribe((items) => {
      this.todoItems = items;
    });

    console.log('Todo Items:', this.todoItems); // Debug 


    if (this.todoItems?.length > 0) {
      this.objKeys = Object.keys(this.todoItems[0]);
      console.log('Extracted Keys:', this.objKeys); // Debug
    } else {
      console.log('No todo items found!'); // Debug
    }
  }
}
