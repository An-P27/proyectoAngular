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
  artList: IArt[] = [];
}
