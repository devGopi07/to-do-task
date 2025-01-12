import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string;
  constructor(private homeService: HomeService) {
    this.title = this.homeService.getMessage("This Is From Home Component")
  }
}
