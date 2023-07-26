import { Component } from '@angular/core';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.scss']
})
export class ContinenteComponent {
  public tipo: string = 'region';
  public title: string = `nombre de su continente`;
  public place: string = this.title;
  public errorText: string = ' del continente';
}
