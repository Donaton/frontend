import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-crear-caso-page',
  templateUrl: './crear-caso-page.component.html',
  styleUrls: ['./crear-caso-page.component.scss']
})
export class CrearCasoPageComponent implements OnInit {
  casoCreado: boolean = false;
  errorCaso: boolean = false;
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      tipo_desastre: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      region: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      fecha: ['', Validators.required],
      meta: ['', Validators.required]
    });
  }

  addCaso() {
    if (this.myForm.valid) {
      const nuevoCaso = this.myForm.value;

      this.apiService.addCaso(nuevoCaso).subscribe(
        response => {
          this.casoCreado = true;
          this.myForm.reset();
        },
        error => {
          this.errorCaso = true;
          console.log(error);

        }
      );
    }
  }
}
