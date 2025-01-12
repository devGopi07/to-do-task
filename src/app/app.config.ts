import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; 
// Add more providers as needed

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    // Additional providers for your app can be added here
    // provideStore(appReducer), // If using NgRx state management
  ],
};
