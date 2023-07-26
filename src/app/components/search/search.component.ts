import { Component, Input } from '@angular/core';

// Modelo
import { Pais } from 'src/app/models/pais.model';

// Servicio
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @Input() tipo: any;
  @Input() title!: string;
  @Input() place!: string;
  @Input() errorText!: string;

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

    this.busquedaService.buscar(this.tipo, termino)
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
