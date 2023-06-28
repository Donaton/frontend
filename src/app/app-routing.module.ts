import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCasoPageComponent } from './pages/crear-caso-page/crear-caso-page.component';
import { EvidenciaPageComponent } from './pages/evidencia-page/evidencia-page.component';

const routes: Routes = [
  { path: 'crear-caso', component: CrearCasoPageComponent },
  { path: 'agregar-evidencias', component: EvidenciaPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
