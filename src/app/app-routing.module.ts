import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionComponent } from "./skeleton/donacion/donacion.component";
import { HomeComponent } from "./skeleton/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'donaciones', pathMatch: 'full' },
  { path: 'donaciones', component: DonacionComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

