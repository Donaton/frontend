import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './skeleton/navbar/navbar.component';
import { EvidenciaPageComponent } from './pages/evidencia-page/evidencia-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearCasoPageComponent } from './pages/crear-caso-page/crear-caso-page.component'; // Importa tu componente aquí

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EvidenciaPageComponent,
    CrearCasoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
