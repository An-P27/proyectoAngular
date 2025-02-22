import { Component, Input } from '@angular/core';
import { IArt } from '../../interfaces/iart.interface';

@Component({
  selector: 'app-art-list',
  imports: [],
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.css',
})
export class ArtListComponent {
  @Input() arts: IArt[] = [];
  texto: string = '';

  ngOnChanges() {
    this.texto = '';
    this.arts.forEach((art) => {
      this.texto += `<li class="art">${art.title}<br>${art.about}<br>${art.date}<br><img src="${art.image}" alt=""> </li>`;
    });
  }
}
