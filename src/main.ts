import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes'; // Import the routes

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideRouter(appRoutes)], // Provide routes here
}).catch((err) => console.error(err));