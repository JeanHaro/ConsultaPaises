import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (private router: Router) {
    this.getArgumentoRuta();
  }

  // TODO: Obtener el argumento de las rutas
  getArgumentoRuta() {
    this.router.events
    .pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
    .subscribe(({ titulo }) => {
      document.title = `Consulta Paises - ${titulo}`
    })
  }
}
