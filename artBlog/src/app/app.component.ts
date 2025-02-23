import { Component } from '@angular/core';
import { ArtFormComponent } from './components/art-form/art-form.component';
import { ArtListComponent } from './components/art-list/art-list.component';
import { IArt } from './interfaces/iart.interface';

@Component({
  selector: 'app-root',
  imports: [ArtFormComponent, ArtListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  artList: IArt[] = [
    {
      title: 'Los amantes',
      about:
        '¿Un amor secreto…? ¿Un amor prohibido…? ¿Dos desconocidos que se gustan sin conocerse…? ¿Lo insensible de algunos amores…? ¿El amor ciego…? El surrealista Magritte no explica nada. Sólo nos deja esa sensación de asfixia, que es quizás un síntoma como otro cualquiera para ilustrar el amor.',
      date: '2023-07-22',
      image:
        'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvYW1hbnRlcy1tYWdyaXR0ZS5qcGciLCJyZXNpemUsMTUwMHxmb3JtYXQsd2VicCJdfQ.BWBk7_pypQln4P-gjIgGU3KkvSotIWiDFaONoHZ1v94.webp',
    },
    {
      title: 'El banquete',
      about:
        'René Magritte, 1958. No sabemos bien qué es lo que está delante y qué es lo que está atrás. ¿Estamos más cerca de ese sol rojo que de los árboles? ¿Están esa balaustrada y esa vasija de piedra en primer plano o quizás están detrás de todo? ¿O está todo pintado sobre ese muro, y hay un agujero circular que nos deja ver la luz del sol? Todo es posible.',
      date: '2024-02-15',
      image:
        'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjBlZGIzNTk4YzBhMS5qcGciLCJyZXNpemUsMTUwMHxmb3JtYXQsd2VicCJdfQ.GS1rSswwyeBCN2a1JT9A5Y8wgClHaUn2V7KkdF8uTy4.webp',
    },
    {
      title: 'Madre e hijo',
      about:
        'Gari Melchers pinta a una madre con su hijo, otra de sus representaciones naturalistas de la vida campesina de cuando estuvo en la Holanda rural, donde llegaría a fundar una colonia de arte con otros artistas estadounidenses.',
      date: '2024-08-12',
      image:
        'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjc5ZjU0YThiMjkwOC5qcGciLCJyZXNpemUsODAwIl19.XODiVO2dC6sUvguyb3wjw9U2GaO2Zz1BT9pWhLbPdlU.jpg',
    },
    {
      title: 'El molino Blute-Fin',
      about:
        'Cuando Dirk Hannema, fundador del Museum de Fundatie, compró este molino en París por 6500 francos, atribuyó la autoría a Vincent van Gogh, pero nadie lo creyó. Hannema era una figura controvertida: ya había intentado colar varias falsificaciones como si fueran Vermeers originales.',
      date: '2025-01-18',
      image:
        'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjA3ZjVjZWUwNWIxNy5qcGciLCJyZXNpemUsMTUwMHxmb3JtYXQsd2VicCJdfQ.4O-Z33NALaPzKmdJeMlnQWOELThR6Dcoaa0ba1d_65Q.webp',
    },
  ];

  getDataForm(event: IArt) {
    this.artList = [...this.artList, event];
  }
}
