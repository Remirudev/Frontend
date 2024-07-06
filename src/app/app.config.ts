import { ApplicationConfig } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    BrowserModule,
    ButtonModule,
    RouterOutlet,
    PrimeNGConfig,
    provideAnimations(),
    provideStore()
],
};
