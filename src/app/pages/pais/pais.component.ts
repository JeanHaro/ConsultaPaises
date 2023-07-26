import { Component } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent {
  public tipo: string = 'name';
  public title: string = `sus nombres`;
  public place: string = this.title;
  public errorText: string = '';
}
