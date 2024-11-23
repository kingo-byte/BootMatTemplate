import { ApplicationConfig, APP_INITIALIZER, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthService } from './Services/auth.service';
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return sessionStorage.getItem("access-token");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    AuthService,
    importProvidersFrom(
    JwtModule.forRoot({
        config: {
            tokenGetter: tokenGetter
        },
    }),
  )
  ],
};
