import { Component } from '@angular/core';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {
  public tipo: string = 'capital';
  public title: string = `nombre de su ${this.tipo}`;
  public place: string = this.title;
  public errorText: string = ` de su ${this.tipo}`
}
