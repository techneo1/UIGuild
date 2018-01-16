import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Compiles application with JIT in < Angular 5
// Compile with AOT in Angular 5 by default
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
