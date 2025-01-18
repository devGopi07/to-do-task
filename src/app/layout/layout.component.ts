import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterModule,  } from '@angular/router'; 

@Component({
  selector: 'app-layout',
  imports: [RouterModule,NavbarComponent, FooterComponent,  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'], // Corrected to "styleUrls"
  standalone: true, // Add this if you're using standalone components
})
export class LayoutComponent {}
