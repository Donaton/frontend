import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importa el módulo principal de tu aplicación

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
