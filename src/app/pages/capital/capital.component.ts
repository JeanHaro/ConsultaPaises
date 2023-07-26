import { Component } from '@angular/core';

// Modelo
import { Pais } from 'src/app/models/pais.model';

// Servicios
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {
  public pais: Pais[] = [];
  public paisTemp: Pais[] = [];
  public errores: boolean = false;

  constructor ( private busquedaService: BusquedasService ) { }

  // TODO: Buscar
  buscar (termino: string = '') {
    // Si está vacio entonces no regrese nada
    if (termino.length === 0) {
      this.errores = false;

      return this.pais =  this.paisTemp;
    }

    this.busquedaService.buscar('capital', termino)
    .subscribe({
      next: (resp: any[]) => {
        this.pais = resp;
        this.errores = false;

        // Guardamos valores en order
        for (let i = 0; i < this.pais.length; i++) {
          this.pais[i].order = i + 1;
        }
      },
      error: () => {
        this.pais =  this.paisTemp;
        this.errores = true;
      }
    });

    return [];
  }
}
