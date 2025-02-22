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
      title: 'Madre e hijo',
      about:
        'Gari Melchers pinta a una madre con su hijo, otra de sus representaciones naturalistas de la vida campesina de cuando estuvo en la Holanda rural, donde llegaría a fundar una colonia de arte con otros artistas estadounidenses.',
      date: '2025-02-12',
      image: 'https://placehold.co/500x500',
    },
    {
      title: 'Madre e hijo',
      about:
        'Gari Melchers pinta a una madre con su hijo, otra de sus representaciones naturalistas de la vida campesina de cuando estuvo en la Holanda rural, donde llegaría a fundar una colonia de arte con otros artistas estadounidenses.',
      date: '2025-02-12',
      image: 'https://placehold.co/500x500',
    },
  ];

  getDataForm(event: IArt) {
    this.artList = [...this.artList, event];
    console.log(this.artList);
  }
}
