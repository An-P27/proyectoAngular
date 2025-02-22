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
      date: '2023-02-12',
      image:
        'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjc5ZjU0YThiMjkwOC5qcGciLCJyZXNpemUsODAwIl19.XODiVO2dC6sUvguyb3wjw9U2GaO2Zz1BT9pWhLbPdlU.jpg',
    },
    {
      title: 'Castillo de naipes',
      about:
        'Gari Melchers pinta a una madre con su hijo, otra de sus representaciones naturalistas de la vida campesina de cuando estuvo en la Holanda rural, donde llegaría a fundar una colonia de arte con otros artistas estadounidenses.',
      date: '2024-08-01',
      image:
        'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbmFpcGVzXy5qcGciLCJyZXNpemUsMTUwMHxmb3JtYXQsd2VicCJdfQ.KmFUncbhcW4AElD-OTh509UOMV-aQm2cHtftu6Ouirw.webp',
    },
  ];

  getDataForm(event: IArt) {
    this.artList = [...this.artList, event];
  }
}
