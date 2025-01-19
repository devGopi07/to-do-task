import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NzCardComponent, NzButtonModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todoItems: any;
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    // Subscribe to todo items for real-time updates
    this.homeService.getToDoItems().subscribe((items) => {
      this.todoItems = items;
    });
  }
  onDeleteItem(item: any) {
    this.homeService.deleteItem(item)
  }

}
