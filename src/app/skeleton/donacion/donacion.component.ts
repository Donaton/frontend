import { Component } from '@angular/core';
import { Donacion } from '../Interfaces/donacion.interface';
import { Donante } from '../Interfaces/donante.interface';
import { Caso } from '../Interfaces/caso.interface';
import { DonacionService } from '../services/donacion.service';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent {
  donacion: Donacion = { idDonacion: 0, monto: '', donante: { ID_donante: 0, nombre: '', email: '', telefono: '', ciudad: '' }, caso: null };
  donante: Donante = { ID_donante: 0, nombre: '', email: '', telefono: '', ciudad: '' };
  casos: Caso[] = []; // Lista de casos disponibles
  montoDonado: number = 0; // Inicializa el monto donado

  constructor(private donacionService: DonacionService) {
    this.listarCasos();
  }

  listarCasos(): void {
    // Llamar al servicio para obtener la lista de casos
    this.donacionService.listarCasos().subscribe(
      (casos) => {
        this.casos = casos;
      },
      (error) => {
        console.error('Error al obtener la lista de casos:', error);
        // Manejar el error de forma adecuada
      }
    );
  }

  submitDonacion(): void {
    // Asignar el donante y el caso seleccionado a la donación
    this.donacion.donante = this.donante;

    // Llamar al servicio para guardar la donación
    this.donacionService.addDonacion(this.donacion, this.donante).subscribe(
      (donacionResponse) => {
        console.log('Donación guardada:', donacionResponse);
      },
      (error) => {
        console.error('Error al guardar la donación:', error);
        // Manejar el error de forma adecuada
      }
    );
  }


  getProgressWidth(): string {

    const casoSeleccionado = this.donacion.caso;
    if (casoSeleccionado) {
      const montoLimite = casoSeleccionado.montoLimite;
      const percentage = (this.montoDonado / montoLimite) * 100;
      return percentage + '%';
    }
    return '0%';
  }
}









