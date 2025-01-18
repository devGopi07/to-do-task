import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule,NzButtonModule],
  templateUrl:'./navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true, // Add this if you're using standalone components

})
export class NavbarComponent {

}
