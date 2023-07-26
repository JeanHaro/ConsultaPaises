import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

// Modelos
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor (private http: HttpClient) { }

  // TODO: Indicar los valores para la creación de pais
  private transformarPais (resultados: any[]): Pais[] {
    return resultados.map(
      country => new Pais(country.name.common, country.capital, country.region)
    );
  }

  // TODO: Buscar paises
  buscar (
    tipo: 'name' | 'capital' | 'region',
    termino: string
  ) {
    return this.http.get<any[]>(`https://restcountries.com/v3.1/${tipo}/${termino}`).pipe(
      map( (resp: any) => {
        return this.transformarPais(resp);
      })
    )
  }
}
