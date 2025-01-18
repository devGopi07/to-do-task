import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-home',
  imports: [CommonModule,NzCardComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string;
  todoItems : any;
  constructor(private homeService: HomeService) {
    this.title = this.homeService.getMessage("This Is From Home Component")
    this.homeService.getService('https://fakestoreapi.com/products') 
    this.todoItems = this.homeService.getToDoItems()
    console.log("logging",this.todoItems)
  }
}
